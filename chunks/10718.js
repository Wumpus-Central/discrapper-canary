r.d(n, {
    Hf: function () {
        return b;
    },
    JT: function () {
        return S;
    },
    Nk: function () {
        return I;
    },
    Qm: function () {
        return N;
    },
    VB: function () {
        return T;
    },
    Xq: function () {
        return E;
    },
    YZ: function () {
        return A;
    },
    wi: function () {
        return y;
    }
});
var i = r(47120);
var a = r(724458);
var s = r(653041);
var o = r(192379),
    l = r(442837),
    u = r(430824),
    c = r(823379),
    d = r(254711),
    f = r(213459),
    _ = r(367790),
    h = r(895924),
    p = r(581364),
    m = r(689079),
    g = r(981631);
function E(e, n, r) {
    var i, a, s, o;
    if (null == n)
        return {
            application: void 0,
            command: void 0
        };
    let l = f.ZP.getUserState(),
        u = f.ZP.getContextState(e),
        c = Object.values(null !== (s = null === (i = l.result) || void 0 === i ? void 0 : i.sections) && void 0 !== s ? s : {}).concat(Object.values(null !== (o = null === (a = u.result) || void 0 === a ? void 0 : a.sections) && void 0 !== o ? o : {}));
    if (null != r) {
        let e = c.find((e) => {
            var n;
            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === r;
        });
        if (null != e) {
            let r = v(e, n);
            return {
                application: e.descriptor.application,
                command: r
            };
        }
    } else
        for (let e of c) {
            let r = v(e, n);
            if (null != r)
                return {
                    application: e.descriptor.application,
                    command: r
                };
        }
    return {
        application: void 0,
        command: void 0
    };
}
function v(e, n) {
    var r, i, a;
    if (null == n) return;
    if (null != e.commands[n]) return e.commands[n];
    let s =
        null ===
            (r = Object.values(e.commands).find((e) => {
                var r;
                return (null === (r = e.rootCommand) || void 0 === r ? void 0 : r.id) === n;
            })) || void 0 === r
            ? void 0
            : r.rootCommand;
    return null != s
        ? (0, p.Z8)({
              rootCommand: s,
              command: s,
              applicationId: null !== (a = null === (i = e.descriptor.application) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : ''
          })
        : void 0;
}
function I(e, n, r) {
    var i, a, s, o, l, u, c, d;
    let _ = f.ZP.getUserState(),
        h = f.ZP.getContextState(e),
        p = f.ZP.getApplicationState(r),
        m = null !== (d = null !== (c = null === (a = _.result) || void 0 === a ? void 0 : null === (i = a.sections) || void 0 === i ? void 0 : i[r]) && void 0 !== c ? c : null === (o = h.result) || void 0 === o ? void 0 : null === (s = o.sections) || void 0 === s ? void 0 : s[r]) && void 0 !== d ? d : null === (u = p.result) || void 0 === u ? void 0 : null === (l = u.sections) || void 0 === l ? void 0 : l[r];
    return null == m ? void 0 : m.descriptor;
}
function T(e, n, r) {
    let i = f.ZP.query(
        e,
        {
            commandTypes: [n],
            text: r
        },
        {
            scoreMethod: _.p.COMMAND_OR_APPLICATION,
            allowFetch: !1
        }
    );
    return {
        commands: i.commands,
        sections: i.descriptors
    };
}
function b(e) {
    let n = f.ZP.getUserState(),
        r = f.ZP.getContextState(e);
    return [null == n ? void 0 : n.result, null == r ? void 0 : r.result];
}
function y(e) {
    let { channel: n, filters: r, options: i, allowFetch: a } = e,
        s = null == n ? void 0 : n.guild_id,
        c = (0, l.e7)([u.Z], () => u.Z.getGuild(s), [s]),
        {
            descriptors: _,
            commands: h,
            sectionedCommands: p,
            loading: E
        } = (0, f.JK)(n, c, r, {
            ...i,
            allowFetch: a
        }),
        [v, I] = o.useState(null),
        T = o.useRef(E);
    o.useEffect(() => {
        T.current = E;
    });
    let b = o.useMemo(() => {
        var e;
        return R(null !== (e = i.placeholderCount) && void 0 !== e ? e : 0, r.commandTypes[0]);
    }, [r.commandTypes, i.placeholderCount]);
    return o.useMemo(() => {
        let e = {
            loading: T,
            commands: h,
            activeSections: _,
            commandsByActiveSection: p,
            filteredSectionId: v,
            hasMoreAfter: !1,
            placeholders: E ? b : [],
            sectionDescriptors: _,
            filterSection: (e) => {
                I(e);
            },
            scrollDown: g.dG4
        };
        if (null != v) {
            let n = p.find((e) => e.section.id === v);
            (e.activeSections = null != n ? [n.section] : []), (e.commandsByActiveSection = null != n ? [n] : []);
        }
        if (E) {
            let n = p[0];
            if (null != n)
                e.commandsByActiveSection = [
                    {
                        section: n.section,
                        data: [...n.data, ...b]
                    },
                    ...p.slice(1)
                ];
            else {
                let n = d.Tm[m.bi.BUILT_IN];
                (e.activeSections = [n]),
                    (e.commandsByActiveSection = [
                        {
                            section: n,
                            data: b
                        }
                    ]);
            }
            e.commands = [...h, ...b];
        }
        return e;
    }, [h, _, v, p, E, b]);
}
function S(e, n, r) {
    var i;
    let { descriptors: a, commands: s, loading: o } = f.ZP.query(e, n, r),
        l = R(o && null !== (i = r.placeholderCount) && void 0 !== i ? i : 0, n.commandTypes[0]);
    return {
        commands: o ? [...s, ...l] : s,
        sections: o && 0 === a.length ? [d.Tm[m.bi.BUILT_IN]] : a
    };
}
function A(e, n) {
    let r = (0, f.PL)(!0, !0),
        i = (0, f.em)(e, !0, !0);
    return o.useMemo(() => {
        if (null != n) {
            var e, a, s, o;
            for (let l of Object.values(null !== (s = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== s ? s : {}).concat(Object.values(null !== (o = null === (a = i.result) || void 0 === a ? void 0 : a.sections) && void 0 !== o ? o : {}))) {
                let e = l.commands[n];
                if (null != e)
                    return {
                        command: e,
                        application: l.descriptor.application
                    };
            }
        }
        return {
            command: void 0,
            application: void 0
        };
    }, [i.result, r.result, n]);
}
function N(e, n, r) {
    let i = (0, f.PL)(!0, !0),
        a = (0, f.em)(e, !0, !0);
    return o.useMemo(() => {
        var e, s, o, l, u, d;
        let f = null !== (u = null === (s = i.result) || void 0 === s ? void 0 : null === (e = s.sections) || void 0 === e ? void 0 : e[n]) && void 0 !== u ? u : null === (o = a.result) || void 0 === o ? void 0 : o.sections[n],
            _ = Object.values(null !== (d = null == f ? void 0 : f.commands) && void 0 !== d ? d : {})
                .map((e) =>
                    null == e.rootCommand
                        ? e
                        : (0, p.Z8)({
                              rootCommand: e.rootCommand,
                              command: e.rootCommand,
                              applicationId: e.applicationId
                          })
                )
                .reduce((e, n) => ((e[n.id] = n), e), {});
        return {
            application: null == f ? void 0 : null === (l = f.descriptor) || void 0 === l ? void 0 : l.application,
            commands: r.map((e) => _[e]).filter(c.lm)
        };
    }, [null == i ? void 0 : i.result, null == a ? void 0 : a.result, n, r]);
}
let C = {
    id: 'placeholder-section',
    type: h.Qi.APPLICATION,
    name: ''
};
function R(e, n) {
    let r = [];
    for (let i = 0; i < e; i++) r.push(O(i, n));
    return r;
}
function O(e, n) {
    return {
        type: n,
        inputType: h.iw.PLACEHOLDER,
        id: 'placeholder-'.concat(e),
        untranslatedName: '',
        displayName: '',
        untranslatedDescription: '',
        displayDescription: '',
        applicationId: '',
        section: C
    };
}
