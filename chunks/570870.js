n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    i = n(512722),
    o = n.n(i),
    u = n(442837),
    a = n(481060),
    c = n(10718),
    d = n(667204),
    s = n(826298),
    f = n(276022),
    _ = n(978983),
    g = n(430824),
    b = n(594174),
    p = n(981631),
    E = n(689079),
    y = n(388032),
    O = n(618859);
let h = (e) => {
    let t,
        { commandType: n, commandTargetId: i, channel: h, guildId: m, onHeightUpdate: v, context: T } = e,
        A = (0, u.e7)([g.Z], () => g.Z.getGuild(null != m ? m : h.guild_id)),
        S = (0, u.e7)([b.default], () => b.default.getUser(i)),
        N = (0, f.Z)({
            user: S,
            guildId: null == A ? void 0 : A.id,
            context: T
        }),
        P = l.useMemo(
            () => ({
                channel: h,
                type: 'channel'
            }),
            [h]
        ),
        {
            commands: I,
            sectionDescriptors: Z,
            loading: j
        } = c.wi({
            context: P,
            filters: { commandTypes: [n] },
            options: { limit: E.lr },
            allowFetch: !0
        }),
        { sections: M } = l.useMemo(() => {
            let e = {};
            return (
                Z.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [Z]),
        D = l.useRef(j);
    l.useEffect(() => {
        j !== D.current && ((D.current = j), null == v || v());
    }, [j, v]);
    let w = l.useCallback(
        (e) => {
            o()(null != h, 'menu item should not show if channel is null');
            let t = M[e.applicationId],
                n = null != t ? (0, s.ky)(t) : void 0;
            return (0, r.jsx)(
                a.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, r.jsx)(n, {
                                  channel: h,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, d.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: h,
                                guild: A
                            },
                            commandTargetId: i
                        });
                    }
                },
                e.id
            );
        },
        [h, A, i, M]
    );
    if (
        (j
            ? (t = (0, r.jsx)(
                  a.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(_.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === I.length
                      ? (0, r.jsx)(
                            a.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: y.NW.string(y.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : I.map(w)),
              null != N &&
                  N.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(a.Clw, {}, 'separator'), N]
                  }))),
        !p.TPd.TEXTUAL.has(h.type))
    )
        if (null == N) return null;
        else t = N;
    return (0, r.jsx)(a.sNh, {
        id: 'apps',
        label: y.NW.string(y.t.PHjkRE),
        listClassName: O.list,
        children: t
    });
};
