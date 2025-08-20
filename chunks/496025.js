a.d(t, { Z: () => E }), a(388685), a(35282);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(602715),
    o = a(442837),
    c = a(481060),
    d = a(493683),
    u = a(43267),
    m = a(933557),
    x = a(258732),
    h = a(592125),
    p = a(699516),
    v = a(594174),
    b = a(55589),
    f = a(630388),
    j = a(98357),
    g = a(432877),
    _ = a(246992),
    y = a(894257),
    C = a(165432),
    N = a(451429);
function O() {
    var e;
    let t = (0, o.Wu)([b.Z], () => b.Z.getSortedChannels()[1]),
        [a, l] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: d } = (0, o.cj)([h.Z, v.default, p.Z], () => ({
            selectedChannel: h.Z.getChannel(a),
            options: t.map((e) => {
                let t = h.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, m.F6)(t, v.default, p.Z) : e.channelId,
                };
            }),
        })),
        j = r.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, f.x9)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            x.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        g =
            null != i &&
            !!i.isPrivate() &&
            (0, f.yE)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/semibold",
                children: "In-Game NUX Message for DMs",
            }),
            (0, n.jsxs)("div", {
                className: C.inGameNuxContainer,
                children: [
                    (0, n.jsx)(c.VcW, {
                        wrapperClassName: C.search,
                        options: d,
                        placeholder: "Select DM",
                        value: a,
                        onChange: l,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = h.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, n.jsx)(c.qEK, {
                                      src: (0, u.x)(t),
                                      "aria-hidden": !0,
                                      size: c.EFr.SIZE_16,
                                  });
                        },
                        popoutLayerContext: _.O$,
                    }),
                    (0, n.jsx)(c.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: g ? "Clear NUX Flag" : "Set NUX Flag",
                        onClick: j,
                        disabled: null == a,
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
    return (0, n.jsx)(c.zxk, {
        variant: "primary",
        size: "sm",
        text: "Open System DM",
        onClick: e,
    });
}
function E() {
    let e = (0, o.e7)([g.ZP], () => g.ZP.allByCategory(g.zU.MESSAGING), [], o.pF).map((e) => {
        let [t, a, { label: r }] = e;
        return (0, n.jsx)(
            c.j7V,
            {
                value: a,
                onChange: (e) => (0, j.Z)(t, e),
                hideBorder: !0,
                className: C.switch,
                children: r,
            },
            t,
        );
    });
    return (0, n.jsxs)("div", {
        className: i()(N.panel, C.panel),
        children: [
            e,
            (0, n.jsx)("div", { className: C.divider }),
            (0, n.jsx)(O, {}),
            (0, n.jsx)("div", { className: C.divider }),
            (0, n.jsx)(T, {}),
        ],
    });
}
