n.d(t, { Z: () => O }), n(388685), n(35282);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(602715),
    s = n(442837),
    c = n(481060),
    d = n(493683),
    u = n(43267),
    m = n(933557),
    p = n(258732),
    h = n(592125),
    x = n(699516),
    f = n(594174),
    b = n(55589),
    g = n(630388),
    v = n(98357),
    j = n(432877),
    _ = n(246992),
    y = n(37812),
    C = n(165432),
    S = n(451429);
function E() {
    var e;
    let t = (0, s.Wu)([b.Z], () => b.Z.getSortedChannels()[1]),
        [n, l] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: d } = (0, s.cj)([h.Z, f.default, x.Z], () => ({
            selectedChannel: h.Z.getChannel(n),
            options: t.map((e) => {
                let t = h.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, m.F6)(t, f.default, x.Z) : e.channelId,
                };
            }),
        })),
        v = r.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, g.x9)(null != (e = i.recipientFlags) ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            p.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        j =
            null != i &&
            !!i.isPrivate() &&
            (0, g.yE)(null != (e = i.recipientFlags) ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Text, {
                variant: "text-md/semibold",
                children: "In-Game NUX Message for DMs",
            }),
            (0, a.jsxs)("div", {
                className: C.inGameNuxContainer,
                children: [
                    (0, a.jsx)(c.VcW, {
                        wrapperClassName: C.search,
                        options: d,
                        placeholder: "Select DM",
                        value: n,
                        onChange: l,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = h.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, a.jsx)(c.qEK, {
                                      src: (0, u.x)(t),
                                      "aria-hidden": !0,
                                      size: c.EFr.SIZE_16,
                                  });
                        },
                        popoutLayerContext: _.O$,
                    }),
                    (0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: j ? "Clear NUX Flag" : "Set NUX Flag",
                        onClick: v,
                        disabled: null == n,
                    }),
                ],
            }),
        ],
    });
}
function T() {
    let e = r.useCallback(() => {
        d.Z.openPrivateChannel({ recipientIds: [y.I] });
    }, []);
    return (0, a.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        text: "Open System DM",
        onClick: e,
    });
}
function O() {
    let e = (0, s.e7)([j.ZP], () => j.ZP.allByCategory(j.zU.MESSAGING), [], s.pF).map((e) => {
        let [t, n, { label: r }] = e;
        return (0, a.jsx)(
            c.rsf,
            {
                label: r,
                description: t,
                checked: n,
                onChange: (e) => (0, v.Z)(t, e),
            },
            t,
        );
    });
    return (0, a.jsxs)("div", {
        className: i()(S.panel, C.panel),
        children: [
            e,
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(E, {}),
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(T, {}),
        ],
    });
}
