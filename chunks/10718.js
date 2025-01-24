r.d(n, {
    Hf: function () {
        return I;
    },
    JT: function () {
        return S;
    },
    Nk: function () {
        return y;
    },
    Qm: function () {
        return C;
    },
    VB: function () {
        return b;
    },
    Xq: function () {
        return E;
    },
    YZ: function () {
        return A;
    },
    wi: function () {
        return T;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(653041);
var s = r(192379),
    l = r(442837),
    u = r(430824),
    c = r(823379),
    d = r(254711),
    f = r(213459),
    p = r(367790),
    h = r(895924),
    _ = r(581364),
    m = r(689079),
    g = r(981631);
function E(e, n, r) {
    var i, a, o, s;
    if (null == n)
        return {
            application: void 0,
            command: void 0
        };
    let l = f.ZP.getUserState(),
        u = f.ZP.getContextState(e),
        c = Object.values(null !== (o = null === (i = l.result) || void 0 === i ? void 0 : i.sections) && void 0 !== o ? o : {}).concat(Object.values(null !== (s = null === (a = u.result) || void 0 === a ? void 0 : a.sections) && void 0 !== s ? s : {}));
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
    let o =
        null ===
            (r = Object.values(e.commands).find((e) => {
                var r;
                return (null === (r = e.rootCommand) || void 0 === r ? void 0 : r.id) === n;
            })) || void 0 === r
            ? void 0
            : r.rootCommand;
    return null != o
        ? (0, _.Z8)({
              rootCommand: o,
              command: o,
              applicationId: null !== (a = null === (i = e.descriptor.application) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : ''
          })
        : void 0;
}
function y(e, n, r) {
    var i, a, o, s, l, u, c, d;
    let p = f.ZP.getUserState(),
        h = f.ZP.getContextState(e),
        _ = f.ZP.getApplicationState(r),
        m = null !== (d = null !== (c = null === (a = p.result) || void 0 === a ? void 0 : null === (i = a.sections) || void 0 === i ? void 0 : i[r]) && void 0 !== c ? c : null === (s = h.result) || void 0 === s ? void 0 : null === (o = s.sections) || void 0 === o ? void 0 : o[r]) && void 0 !== d ? d : null === (u = _.result) || void 0 === u ? void 0 : null === (l = u.sections) || void 0 === l ? void 0 : l[r];
    return null == m ? void 0 : m.descriptor;
}
function b(e, n, r) {
    let i = f.ZP.query(
        e,
        {
            commandTypes: [n],
            text: r
        },
        {
            scoreMethod: p.p.COMMAND_OR_APPLICATION,
            allowFetch: !1
        }
    );
    return {
        commands: i.commands,
        sections: i.descriptors
    };
}
function I(e) {
    let n = f.ZP.getUserState(),
        r = f.ZP.getContextState(e);
    return [null == n ? void 0 : n.result, null == r ? void 0 : r.result];
}
function T(e) {
    let { context: n, filters: r, options: i, allowFetch: a } = e,
        o = 'channel' === n.type ? n.channel.guild_id : null,
        c = (0, l.e7)([u.Z], () => u.Z.getGuild(o), [o]),
        {
            descriptors: p,
            commands: h,
            sectionedCommands: _,
            loading: E
        } = (0, f.JK)(n, c, r, {
            ...i,
            allowFetch: a
        }),
        [v, y] = s.useState(null),
        b = s.useRef(E);
    s.useEffect(() => {
        b.current = E;
    });
    let I = s.useMemo(() => {
        var e;
        return R(null !== (e = i.placeholderCount) && void 0 !== e ? e : 0, r.commandTypes[0]);
    }, [r.commandTypes, i.placeholderCount]);
    return s.useMemo(() => {
        let e = {
            loading: b,
            commands: h,
            activeSections: p,
            commandsByActiveSection: _,
            filteredSectionId: v,
            hasMoreAfter: !1,
            placeholders: E ? I : [],
            sectionDescriptors: p,
            filterSection: (e) => {
                y(e);
            },
            scrollDown: g.dG4
        };
        if (null != v) {
            let n = _.find((e) => e.section.id === v);
            (e.activeSections = null != n ? [n.section] : []), (e.commandsByActiveSection = null != n ? [n] : []);
        }
        if (E) {
            let n = _[0];
            if (null != n)
                e.commandsByActiveSection = [
                    {
                        section: n.section,
                        data: [...n.data, ...I]
                    },
                    ..._.slice(1)
                ];
            else {
                let n = d.Tm[m.bi.BUILT_IN];
                (e.activeSections = [n]),
                    (e.commandsByActiveSection = [
                        {
                            section: n,
                            data: I
                        }
                    ]);
            }
            e.commands = [...h, ...I];
        }
        return e;
    }, [h, p, v, _, E, I]);
}
function S(e, n, r) {
    var i;
    let { descriptors: a, commands: o, loading: s } = f.ZP.query(e, n, r),
        l = R(s && null !== (i = r.placeholderCount) && void 0 !== i ? i : 0, n.commandTypes[0]);
    return {
        commands: s ? [...o, ...l] : o,
        sections: s && 0 === a.length ? [d.Tm[m.bi.BUILT_IN]] : a
    };
}
function A(e, n) {
    let r = (0, f.PL)(!0, !0),
        i = (0, f.em)(e, !0, !0);
    return s.useMemo(() => {
        if (null != n) {
            var e, a, o, s;
            for (let l of Object.values(null !== (o = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== o ? o : {}).concat(Object.values(null !== (s = null === (a = i.result) || void 0 === a ? void 0 : a.sections) && void 0 !== s ? s : {}))) {
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
function C(e, n, r) {
    let i = (0, f.PL)(!0, !0),
        a = (0, f.em)(e, !0, !0);
    return s.useMemo(() => {
        var e, o, s, l, u, d;
        let f = null !== (u = null === (o = i.result) || void 0 === o ? void 0 : null === (e = o.sections) || void 0 === e ? void 0 : e[n]) && void 0 !== u ? u : null === (s = a.result) || void 0 === s ? void 0 : s.sections[n],
            p = Object.values(null !== (d = null == f ? void 0 : f.commands) && void 0 !== d ? d : {})
                .map((e) =>
                    null == e.rootCommand
                        ? e
                        : (0, _.Z8)({
                              rootCommand: e.rootCommand,
                              command: e.rootCommand,
                              applicationId: e.applicationId
                          })
                )
                .reduce((e, n) => ((e[n.id] = n), e), {});
        return {
            application: null == f ? void 0 : null === (l = f.descriptor) || void 0 === l ? void 0 : l.application,
            commands: r.map((e) => p[e]).filter(c.lm)
        };
    }, [null == i ? void 0 : i.result, null == a ? void 0 : a.result, n, r]);
}
let N = {
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
        section: N
    };
}
