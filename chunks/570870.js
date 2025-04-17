n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    u = n(481060),
    c = n(10718),
    s = n(667204),
    d = n(826298),
    f = n(276022),
    p = n(978983),
    b = n(430824),
    g = n(594174),
    _ = n(981631),
    h = n(689079),
    E = n(388032),
    m = n(547607);
let y = (e) => {
    let t,
        { commandType: n, commandTargetId: l, channel: y, guildId: O, onHeightUpdate: T, context: v } = e,
        S = (0, a.e7)([b.Z], () => b.Z.getGuild(null != O ? O : y.guild_id)),
        N = (0, a.e7)([g.default], () => g.default.getUser(l)),
        A = (0, f.Z)({
            user: N,
            guildId: null == S ? void 0 : S.id,
            context: v
        }),
        P = i.useMemo(
            () => ({
                channel: y,
                type: 'channel'
            }),
            [y]
        ),
        {
            commands: Z,
            sectionDescriptors: j,
            loading: I
        } = c.wi({
            context: P,
            filters: { commandTypes: [n] },
            options: { limit: h.lr },
            allowFetch: !0
        }),
        { sections: w } = i.useMemo(() => {
            let e = {};
            return (
                j.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [j]),
        C = i.useRef(I);
    i.useEffect(() => {
        I !== C.current && ((C.current = I), null == T || T());
    }, [I, T]);
    let x = i.useCallback(
        (e) => {
            o()(null != y, 'menu item should not show if channel is null');
            let t = w[e.applicationId],
                n = null != t ? (0, d.ky)(t) : void 0;
            return (0, r.jsx)(
                u.sNh,
                {
                    id: e.id,
                    label: e.displayName,
                    iconLeft: () =>
                        null != n
                            ? (0, r.jsx)(n, {
                                  channel: y,
                                  section: t,
                                  width: 18,
                                  height: 18,
                                  selectable: !1
                              })
                            : null,
                    action: () => {
                        (0, s.Z)({
                            command: e,
                            optionValues: {},
                            context: {
                                channel: y,
                                guild: S
                            },
                            commandTargetId: l
                        });
                    }
                },
                e.id
            );
        },
        [y, S, l, w]
    );
    if (
        (I
            ? (t = (0, r.jsx)(
                  u.sNh,
                  {
                      id: 'menu-commands-placeholder',
                      render: () => (0, r.jsx)(p.Z, {}),
                      disabled: !0
                  },
                  'menu-commands-placeholder'
              ))
            : ((t =
                  0 === Z.length
                      ? (0, r.jsx)(
                            u.sNh,
                            {
                                id: 'menu-commands-empty',
                                label: E.NW.string(E.t.YSNlV1),
                                disabled: !0
                            },
                            'menu-commands-empty'
                        )
                      : Z.map(x)),
              null != A &&
                  A.length > 0 &&
                  (t = (0, r.jsxs)(r.Fragment, {
                      children: [t, (0, r.jsx)(u.Clw, {}, 'separator'), A]
                  }))),
        !_.TPd.TEXTUAL.has(y.type))
    )
        if (null == A) return null;
        else t = A;
    return (0, r.jsx)(u.sNh, {
        id: 'apps',
        label: E.NW.string(E.t.PHjkRE),
        listClassName: m.list,
        children: t
    });
};
