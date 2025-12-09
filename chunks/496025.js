n.d(t, { Z: () => N }), n(388685), n(35282);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
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
function O() {
    var e;
    let t = (0, c.Wu)([v.Z], () => v.Z.getSortedChannels()[1]),
        [n, i] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: l, options: m } = (0, c.cj)([f.Z, b.default, g.Z], () => ({
            selectedChannel: f.Z.getChannel(n),
            options: t.map((e) => {
                let t = f.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, h.F6)(t, b.default, g.Z) : e.channelId,
                };
            }),
        })),
        j = r.useCallback(() => {
            var e;
            if (null == l || !l.isPrivate()) return;
            let t = (0, o.x9)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            x.Z.updatePrivateChannelRecipientFlags(l.id, t);
        }, [l]),
        _ =
            null != l &&
            !!l.isPrivate() &&
            (0, o.yE)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
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
                        onChange: i,
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
function T() {
    let e = r.useCallback(() => {
        m.Z.openPrivateChannel({ recipientIds: [C.I] });
    }, []);
    return (0, a.jsx)(u.Button, {
        variant: "primary",
        size: "sm",
        text: "Open System DM",
        onClick: e,
    });
}
function N() {
    let e = (0, c.e7)([_.ZP], () => _.ZP.allByCategory(_.zU.MESSAGING), [], c.pF).map((e) => {
        let [t, n, { label: r }] = e;
        return (0, a.jsx)(
            u.rsf,
            {
                label: r,
                description: t,
                checked: n,
                onChange: (e) => (0, j.Z)(t, e),
            },
            t,
        );
    });
    return (0, a.jsxs)("div", {
        className: l()(E.panel, S.panel),
        children: [
            e,
            (0, a.jsx)("div", { className: S.divider }),
            (0, a.jsx)(O, {}),
            (0, a.jsx)("div", { className: S.divider }),
            (0, a.jsx)(T, {}),
        ],
    });
}
