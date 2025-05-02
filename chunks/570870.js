t.d(n, { Z: () => y });
var r = t(200651),
    i = t(192379),
    l = t(512722),
    o = t.n(l),
    a = t(442837),
    s = t(481060),
    c = t(10718),
    d = t(667204),
    u = t(826298),
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
        S = (0, f.Z)({
            user: T,
            guildId: null == j ? void 0 : j.id,
            context: Z
        }),
        x = i.useMemo(
            () => ({
                channel: y,
                type: 'channel'
            }),
            [y]
        ),
        {
            commands: I,
            sectionDescriptors: P,
            loading: w
        } = c.wi({
            context: x,
            filters: { commandTypes: [t] },
            options: { limit: m.lr },
            allowFetch: !0
        }),
        { sections: A } = i.useMemo(() => {
            let e = {};
            return (
                P.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [P]),
        C = i.useRef(w);
    i.useEffect(() => {
        w !== C.current && ((C.current = w), null == E || E());
    }, [w, E]);
    let N = i.useCallback(
        (e) => {
            o()(null != y, 'menu item should not show if channel is null');
            let n = A[e.applicationId],
                t = null != n ? (0, u.ky)(n) : void 0;
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
                        (0, d.Z)({
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
        [y, j, l, A]
    );
    if (
        (w
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
                  0 === I.length
                      ? (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: _.intl.string(_.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : I.map(N)),
              null != S &&
                  S.length > 0 &&
                  (n = (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(s.Clw, {}, 'separator'), S]
                  }))),
        !b.TPd.TEXTUAL.has(y.type))
    )
        if (null == S) return null;
        else n = S;
    return (0, r.jsx)(s.sNh, {
        id: 'apps',
        label: _.intl.string(_.t.PHjkRE),
        listClassName: O.list,
        children: n
    });
};
