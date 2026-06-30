i.d(t, { A: () => N, K: () => j });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(364522),
    c = i(761508),
    u = i(707554),
    o = i(140735),
    d = i(207803),
    g = i(183555),
    m = i(61881),
    f = i(790417),
    x = i(113763),
    I = i(583246),
    p = i(53069),
    E = i(483189),
    A = i(518477),
    h = i(464229);
function j(e) {
    let { children: t, className: i, scrollerRef: l, ...s } = e;
    return (0, n.jsx)(a.Ip, { ref: l, className: r()(h.gN, i), fade: !0, ...s, children: t });
}
function T(e) {
    let { user: t, currentUser: i, section: l, displayProfile: s, guildId: r, channelId: a, onClose: c } = e;
    return l === A.RP.ACTIVITY
        ? (0, n.jsx)(f.A, { user: t, currentUser: i, displayProfile: s, guildId: r, channelId: a, onClose: c })
        : l === A.RP.MUTUAL_FRIENDS
          ? (0, n.jsx)(x.A, { user: t, guildId: r, channelId: a, onClose: c })
          : l === A.RP.MUTUAL_GUILDS
            ? (0, n.jsx)(I.A, { user: t, onClose: c })
            : l === A.RP.WIDGETS
              ? (0, n.jsx)(p.A, { user: t, guildId: r, channelId: a })
              : l === A.RP.WISHLIST
                ? (0, n.jsx)(E.A, { profileOwner: t })
                : null;
}
function N(e) {
    let {
            user: t,
            currentUser: i,
            displayProfile: s,
            guildId: r,
            channelId: f,
            items: x,
            initialSection: I,
            onClose: p,
        } = e,
        { trackUserProfileAction: E } = (0, g.NJ)(),
        [{ section: j, text: N }, v] = l.useState(
            x.find((e) => {
                let { section: t } = e;
                return t === I;
            }) ?? x[0],
        );
    return (0, n.jsxs)("div", {
        className: h.kL,
        children: [
            (0, n.jsx)(a.Ip, {
                orientation: "horizontal",
                className: h.gU,
                fade: !0,
                paddingFix: !1,
                children: (0, n.jsx)(c.V, {
                    type: "top",
                    look: "custom",
                    selectedItem: j,
                    onItemSelect: function (e) {
                        m.A.hasUnsavedChanges() && j === A.RP.WIDGETS
                            ? (0, d.VQ)()
                            : (E({ action: "PRESS_SECTION", section: e }),
                              v((t) => x.find((t) => t.section === e) ?? t));
                    },
                    children: x.map((e) =>
                        (0, n.jsx)(
                            c.V.Item,
                            { className: h.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, n.jsx)(c.V.Panel, {
                id: j,
                "aria-label": N,
                className: h.NM,
                children: (0, n.jsx)(u.F, {
                    component: (0, n.jsx)(o.A, { children: (0, n.jsx)(u.H, { children: N }) }),
                    children: (0, n.jsx)(T, {
                        user: t,
                        currentUser: i,
                        displayProfile: s,
                        guildId: r,
                        channelId: f,
                        section: j,
                        onClose: p,
                    }),
                }),
            }),
        ],
    });
}
