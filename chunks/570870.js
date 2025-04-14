t.d(n, { Z: () => y });
var r = t(200651),
    i = t(192379),
    l = t(512722),
    o = t.n(l),
    a = t(442837),
    s = t(481060),
    c = t(10718),
    u = t(667204),
    d = t(826298),
    f = t(276022),
    p = t(978983),
    g = t(430824),
    h = t(594174),
    b = t(981631),
    m = t(689079),
    _ = t(388032),
    O = t(547607);
let y = (e) => {
    let n,
        { commandType: t, commandTargetId: l, channel: y, guildId: v, onHeightUpdate: E, context: Z } = e,
        j = (0, a.e7)([g.Z], () => g.Z.getGuild(null != v ? v : y.guild_id)),
        T = (0, a.e7)([h.default], () => h.default.getUser(l)),
        N = (0, f.Z)({
            user: T,
            guildId: null == j ? void 0 : j.id,
            context: Z
        }),
        S = i.useMemo(
            () => ({
                channel: y,
                type: 'channel'
            }),
            [y]
        ),
        {
            commands: x,
            sectionDescriptors: P,
            loading: I
        } = c.wi({
            context: S,
            filters: { commandTypes: [t] },
            options: { limit: m.lr },
            allowFetch: !0
        }),
        { sections: w } = i.useMemo(() => {
            let e = {};
            return (
                P.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [P]),
        A = i.useRef(I);
    i.useEffect(() => {
        I !== A.current && ((A.current = I), null == E || E());
    }, [I, E]);
    let C = i.useCallback(
        (e) => {
            o()(null != y, 'menu item should not show if channel is null');
            let n = w[e.applicationId],
                t = null != n ? (0, d.ky)(n) : void 0;
            return (0, r.jsx)(
                s.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != t
                            ? (0, r.jsx)(t, {
                                  channel: y,
                                  section: n,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, u.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: y,
                                guild: j
                            },
                            commandTargetId: l
                        });
                    }
                },
                e.id
            );
        },
        [y, j, l, w]
    );
    if (
        (I
            ? (n = (0, r.jsx)(
                  s.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(p.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((n =
                  0 === x.length
                      ? (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: _.NW.string(_.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : x.map(C)),
              null != N &&
                  N.length > 0 &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(s.Clw, {}, 'separator'), N]
                  }))),
        !b.TPd.TEXTUAL.has(y.type))
    )
        if (null == N) return null;
        else n = N;
    return (0, r.jsx)(s.sNh, {
        id: 'apps',
        label: _.NW.string(_.t.PHjkRE),
        listClassName: O.list,
        children: n
    });
};
