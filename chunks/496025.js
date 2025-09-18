n.d(t, { Z: () => O }), n(388685), n(35282);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(602715),
    o = n(442837),
    c = n(481060),
    d = n(493683),
    u = n(43267),
    m = n(933557),
    h = n(258732),
    p = n(592125),
    x = n(699516),
    b = n(594174),
    f = n(55589),
    g = n(630388),
    v = n(98357),
    j = n(432877),
    _ = n(246992),
    y = n(894257),
    C = n(165432),
    N = n(451429);
function E() {
    var e;
    let t = (0, o.Wu)([f.Z], () => f.Z.getSortedChannels()[1]),
        [n, i] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: l, options: d } = (0, o.cj)([p.Z, b.default, x.Z], () => ({
            selectedChannel: p.Z.getChannel(n),
            options: t.map((e) => {
                let t = p.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, m.F6)(t, b.default, x.Z) : e.channelId,
                };
            }),
        })),
        v = r.useCallback(() => {
            var e;
            if (null == l || !l.isPrivate()) return;
            let t = (0, g.x9)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            h.Z.updatePrivateChannelRecipientFlags(l.id, t);
        }, [l]),
        j =
            null != l &&
            !!l.isPrivate() &&
            (0, g.yE)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
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
                        onChange: i,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = p.Z.getChannel(e.value);
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
                    (0, a.jsx)(c.zxk, {
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
function S() {
    let e = r.useCallback(() => {
        d.Z.openPrivateChannel({ recipientIds: [y.I] });
    }, []);
    return (0, a.jsx)(c.zxk, {
        variant: "primary",
        size: "sm",
        text: "Open System DM",
        onClick: e,
    });
}
function O() {
    let e = (0, o.e7)([j.ZP], () => j.ZP.allByCategory(j.zU.MESSAGING), [], o.pF).map((e) => {
        let [t, n, { label: r }] = e;
        return (0, a.jsx)(
            c.j7V,
            {
                value: n,
                onChange: (e) => (0, v.Z)(t, e),
                hideBorder: !0,
                className: C.switch,
                children: r,
            },
            t,
        );
    });
    return (0, a.jsxs)("div", {
        className: l()(N.panel, C.panel),
        children: [
            e,
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(E, {}),
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(S, {}),
        ],
    });
}
