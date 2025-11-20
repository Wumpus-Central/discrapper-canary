n.d(t, { Z: () => T }), n(388685), n(35282);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
    s = n(602715),
    o = n(95015),
    c = n(442837),
    d = n(481060),
    u = n(493683),
    m = n(43267),
    p = n(933557),
    h = n(258732),
    x = n(592125),
    g = n(699516),
    f = n(594174),
    b = n(55589),
    v = n(98357),
    j = n(432877),
    _ = n(246992),
    y = n(37812),
    C = n(165432),
    S = n(451429);
function E() {
    var e;
    let t = (0, c.Wu)([b.Z], () => b.Z.getSortedChannels()[1]),
        [n, i] = l.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: r, options: u } = (0, c.cj)([x.Z, f.default, g.Z], () => ({
            selectedChannel: x.Z.getChannel(n),
            options: t.map((e) => {
                let t = x.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, p.F6)(t, f.default, g.Z) : e.channelId,
                };
            }),
        })),
        v = l.useCallback(() => {
            var e;
            if (null == r || !r.isPrivate()) return;
            let t = (0, o.x9)(null != (e = r.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            h.Z.updatePrivateChannelRecipientFlags(r.id, t);
        }, [r]),
        j =
            null != r &&
            !!r.isPrivate() &&
            (0, o.yE)(null != (e = r.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(d.Text, {
                variant: "text-md/semibold",
                children: "In-Game NUX Message for DMs",
            }),
            (0, a.jsxs)("div", {
                className: C.inGameNuxContainer,
                children: [
                    (0, a.jsx)(d.VcW, {
                        wrapperClassName: C.search,
                        options: u,
                        placeholder: "Select DM",
                        value: n,
                        onChange: i,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = x.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, a.jsx)(d.qEK, {
                                      src: (0, m.x)(t),
                                      "aria-hidden": !0,
                                      size: d.EFr.SIZE_16,
                                  });
                        },
                        popoutLayerContext: _.O$,
                    }),
                    (0, a.jsx)(d.Button, {
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
function N() {
    let e = l.useCallback(() => {
        u.Z.openPrivateChannel({ recipientIds: [y.I] });
    }, []);
    return (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Open System DM",
        onClick: e,
    });
}
function T() {
    let e = (0, c.e7)([j.ZP], () => j.ZP.allByCategory(j.zU.MESSAGING), [], c.pF).map((e) => {
        let [t, n, { label: l }] = e;
        return (0, a.jsx)(
            d.rsf,
            {
                label: l,
                description: t,
                checked: n,
                onChange: (e) => (0, v.Z)(t, e),
            },
            t,
        );
    });
    return (0, a.jsxs)("div", {
        className: r()(S.panel, C.panel),
        children: [
            e,
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(E, {}),
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(N, {}),
        ],
    });
}
