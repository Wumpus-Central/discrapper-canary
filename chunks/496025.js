n.d(t, { Z: () => T }), n(388685), n(35282);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(602715),
    o = n(95015),
    c = n(442837),
    d = n(668339),
    u = n(481060),
    m = n(493683),
    p = n(43267),
    h = n(933557),
    x = n(258732),
    f = n(592125),
    g = n(699516),
    b = n(594174),
    v = n(55589),
    j = n(98357),
    _ = n(432877),
    y = n(246992),
    C = n(37812),
    S = n(165432),
    E = n(451429);
function N() {
    var e;
    let t = (0, c.Wu)([v.Z], () => v.Z.getSortedChannels()[1]),
        [n, r] = l.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: m } = (0, c.cj)([f.Z, b.default, g.Z], () => ({
            selectedChannel: f.Z.getChannel(n),
            options: t.map((e) => {
                let t = f.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, h.F6)(t, b.default, g.Z) : e.channelId,
                };
            }),
        })),
        j = l.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, o.x9)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            x.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        _ =
            null != i &&
            !!i.isPrivate() &&
            (0, o.yE)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.Text, {
                variant: "text-md/semibold",
                children: "In-Game NUX Message for DMs",
            }),
            (0, a.jsxs)("div", {
                className: S.inGameNuxContainer,
                children: [
                    (0, a.jsx)(d.d, {
                        wrapperClassName: S.search,
                        options: m,
                        placeholder: "Select DM",
                        value: n,
                        onChange: r,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = f.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, a.jsx)(u.qEK, {
                                      src: (0, p.x)(t),
                                      "aria-hidden": !0,
                                      size: u.EFr.SIZE_16,
                                  });
                        },
                        popoutLayerContext: y.O$,
                    }),
                    (0, a.jsx)(u.Button, {
                        variant: "primary",
                        size: "sm",
                        text: _ ? "Clear NUX Flag" : "Set NUX Flag",
                        onClick: j,
                        disabled: null == n,
                    }),
                ],
            }),
        ],
    });
}
function O() {
    let e = l.useCallback(() => {
        m.Z.openPrivateChannel({ recipientIds: [C.I] });
    }, []);
    return (0, a.jsx)(u.Button, {
        variant: "primary",
        size: "sm",
        text: "Open System DM",
        onClick: e,
    });
}
function T() {
    let e = (0, c.e7)([_.ZP], () => _.ZP.allByCategory(_.zU.MESSAGING), [], c.pF).map((e) => {
        let [t, n, { label: l }] = e;
        return (0, a.jsx)(
            u.rsf,
            {
                label: l,
                description: t,
                checked: n,
                onChange: (e) => (0, j.Z)(t, e),
            },
            t,
        );
    });
    return (0, a.jsxs)("div", {
        className: i()(E.panel, S.panel),
        children: [
            e,
            (0, a.jsx)("div", { className: S.divider }),
            (0, a.jsx)(N, {}),
            (0, a.jsx)("div", { className: S.divider }),
            (0, a.jsx)(O, {}),
        ],
    });
}
