n.d(t, { Z: () => T }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(602715),
    o = n(95015),
    c = n(442837),
    d = n(481060),
    u = n(493683),
    m = n(43267),
    p = n(933557),
    h = n(258732),
    f = n(592125),
    b = n(699516),
    x = n(594174),
    g = n(55589),
    v = n(98357),
    j = n(432877),
    y = n(37812),
    C = n(769633),
    _ = n(663618);
function S() {
    var e;
    let t = (0, c.Wu)([g.Z], () => g.Z.getSortedChannels()[1]),
        [n, i] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: l, options: u } = (0, c.cj)([f.Z, x.default, b.Z], () => ({
            selectedChannel: f.Z.getChannel(n),
            options: t.map((e) => {
                let t = f.Z.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, p.F6)(t, x.default, b.Z) : e.channelId,
                    leading:
                        null != t
                            ? (0, a.jsx)(d.qEK, {
                                  src: (0, m.x)(t),
                                  "aria-hidden": !0,
                                  size: d.EFr.SIZE_16,
                              })
                            : void 0,
                };
            }),
        })),
        v = r.useCallback(() => {
            var e;
            if (null == l || !l.isPrivate()) return;
            let t = (0, o.x9)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            h.Z.updatePrivateChannelRecipientFlags(l.id, t);
        }, [l]),
        j =
            null != l &&
            !!l.isPrivate() &&
            (0, o.yE)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)("div", {
        className: C.inGameNuxContainer,
        children: [
            (0, a.jsx)(d.VcW, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: u,
                placeholder: "Select DM",
                value: n,
                onSelectionChange: i,
            }),
            (0, a.jsx)(d.Button, {
                variant: "primary",
                size: "sm",
                text: j ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: v,
                disabled: null == n,
            }),
        ],
    });
}
function E() {
    let e = r.useCallback(() => {
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
        let [t, n, { label: r }] = e;
        return (0, a.jsx)(
            d.rsf,
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
        className: l()(_.panel, C.panel),
        children: [
            e,
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(S, {}),
            (0, a.jsx)("div", { className: C.divider }),
            (0, a.jsx)(E, {}),
        ],
    });
}
