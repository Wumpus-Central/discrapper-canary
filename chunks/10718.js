n.d(t, {
    Hf: () => E,
    JT: () => y,
    Nk: () => m,
    Qm: () => b,
    VB: () => g,
    Xq: () => p,
    YZ: () => I,
    wi: () => v
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(192379),
    r = n(442837),
    a = n(430824),
    s = n(823379),
    o = n(254711),
    l = n(213459),
    u = n(367790),
    c = n(895924),
    d = n(581364),
    f = n(689079),
    _ = n(981631);
function p(e, t, n) {
    var i, r, a, s;
    if (null == t)
        return {
            application: void 0,
            command: void 0
        };
    let o = l.ZP.getUserState(),
        u = l.ZP.getContextState(e),
        c = Object.values(null !== (a = null === (i = o.result) || void 0 === i ? void 0 : i.sections) && void 0 !== a ? a : {}).concat(Object.values(null !== (s = null === (r = u.result) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : {}));
    if (null != n) {
        let e = c.find((e) => {
            var t;
            return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === n;
        });
        if (null != e) {
            let n = h(e, t);
            return {
                application: e.descriptor.application,
                command: n
            };
        }
    } else
        for (let e of c) {
            let n = h(e, t);
            if (null != n)
                return {
                    application: e.descriptor.application,
                    command: n
                };
        }
    return {
        application: void 0,
        command: void 0
    };
}
function h(e, t) {
    var n, i, r;
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let a =
        null ===
            (n = Object.values(e.commands).find((e) => {
                var n;
                return (null === (n = e.rootCommand) || void 0 === n ? void 0 : n.id) === t;
            })) || void 0 === n
            ? void 0
            : n.rootCommand;
    return null != a
        ? (0, d.Z8)({
              rootCommand: a,
              command: a,
              applicationId: null !== (r = null === (i = e.descriptor.application) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : ''
          })
        : void 0;
}
function m(e, t, n) {
    var i, r, a, s, o, u, c, d;
    let f = l.ZP.getUserState(),
        _ = l.ZP.getContextState(e),
        p = l.ZP.getApplicationState(n),
        h = null !== (d = null !== (c = null === (r = f.result) || void 0 === r ? void 0 : null === (i = r.sections) || void 0 === i ? void 0 : i[n]) && void 0 !== c ? c : null === (s = _.result) || void 0 === s ? void 0 : null === (a = s.sections) || void 0 === a ? void 0 : a[n]) && void 0 !== d ? d : null === (u = p.result) || void 0 === u ? void 0 : null === (o = u.sections) || void 0 === o ? void 0 : o[n];
    return null == h ? void 0 : h.descriptor;
}
function g(e, t, n) {
    let i = l.ZP.query(
        e,
        {
            commandTypes: [t],
            text: n
        },
        {
            scoreMethod: u.p.COMMAND_OR_APPLICATION,
            allowFetch: !1
        }
    );
    return {
        commands: i.commands,
        sections: i.descriptors
    };
}
function E(e) {
    let t = l.ZP.getUserState(),
        n = l.ZP.getContextState(e);
    return [null == t ? void 0 : t.result, null == n ? void 0 : n.result];
}
function v(e) {
    let { context: t, filters: n, options: s, allowFetch: u } = e,
        c = 'channel' === t.type ? t.channel.guild_id : null,
        d = (0, r.e7)([a.Z], () => a.Z.getGuild(c), [c]),
        {
            descriptors: p,
            commands: h,
            sectionedCommands: m,
            loading: g
        } = (0, l.JK)(t, d, n, {
            ...s,
            allowFetch: u
        }),
        [E, v] = i.useState(null),
        y = i.useMemo(() => {
            var e;
            return S(null !== (e = s.placeholderCount) && void 0 !== e ? e : 0, n.commandTypes[0]);
        }, [n.commandTypes, s.placeholderCount]);
    return i.useMemo(() => {
        let e = {
            loading: g,
            commands: h,
            activeSections: p,
            commandsByActiveSection: m,
            filteredSectionId: E,
            hasMoreAfter: !1,
            placeholders: g ? y : [],
            sectionDescriptors: p,
            filterSection: (e) => {
                v(e);
            },
            scrollDown: _.dG4
        };
        if (null != E) {
            let t = m.find((e) => e.section.id === E);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (g) {
            let t = m[0];
            if (null != t)
                e.commandsByActiveSection = [
                    {
                        section: t.section,
                        data: [...t.data, ...y]
                    },
                    ...m.slice(1)
                ];
            else {
                let t = o.Tm[f.bi.BUILT_IN];
                (e.activeSections = [t]),
                    (e.commandsByActiveSection = [
                        {
                            section: t,
                            data: y
                        }
                    ]);
            }
            e.commands = [...h, ...y];
        }
        return e;
    }, [h, p, E, m, g, y]);
}
function y(e, t, n) {
    var i;
    let { descriptors: r, commands: a, loading: s } = l.ZP.query(e, t, n),
        u = S(s && null !== (i = n.placeholderCount) && void 0 !== i ? i : 0, t.commandTypes[0]);
    return {
        commands: s ? [...a, ...u] : a,
        sections: s && 0 === r.length ? [o.Tm[f.bi.BUILT_IN]] : r
    };
}
function I(e, t) {
    let n = (0, l.PL)(!0, !0),
        r = (0, l.em)(e, !0, !0);
    return i.useMemo(() => {
        if (null != t) {
            var e, i, a, s;
            for (let o of Object.values(null !== (a = null === (e = n.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}).concat(Object.values(null !== (s = null === (i = r.result) || void 0 === i ? void 0 : i.sections) && void 0 !== s ? s : {}))) {
                let e = o.commands[t];
                if (null != e)
                    return {
                        command: e,
                        application: o.descriptor.application
                    };
            }
        }
        return {
            command: void 0,
            application: void 0
        };
    }, [r.result, n.result, t]);
}
function b(e, t, n) {
    let r = (0, l.PL)(!0, !0),
        a = (0, l.em)(e, !0, !0);
    return i.useMemo(() => {
        var e, i, o, l, u, c;
        let f = null !== (u = null === (i = r.result) || void 0 === i ? void 0 : null === (e = i.sections) || void 0 === e ? void 0 : e[t]) && void 0 !== u ? u : null === (o = a.result) || void 0 === o ? void 0 : o.sections[t],
            _ = Object.values(null !== (c = null == f ? void 0 : f.commands) && void 0 !== c ? c : {})
                .map((e) =>
                    null == e.rootCommand
                        ? e
                        : (0, d.Z8)({
                              rootCommand: e.rootCommand,
                              command: e.rootCommand,
                              applicationId: e.applicationId
                          })
                )
                .reduce((e, t) => ((e[t.id] = t), e), {});
        return {
            application: null == f ? void 0 : null === (l = f.descriptor) || void 0 === l ? void 0 : l.application,
            commands: n.map((e) => _[e]).filter(s.lm)
        };
    }, [null == r ? void 0 : r.result, null == a ? void 0 : a.result, t, n]);
}
let T = {
    id: 'placeholder-section',
    type: c.Qi.APPLICATION,
    name: ''
};
function S(e, t) {
    let n = [];
    for (let i = 0; i < e; i++) n.push(A(i, t));
    return n;
}
function A(e, t) {
    return {
        type: t,
        inputType: c.iw.PLACEHOLDER,
        id: 'placeholder-'.concat(e),
        untranslatedName: '',
        displayName: '',
        untranslatedDescription: '',
        displayDescription: '',
        applicationId: '',
        section: T
    };
}
