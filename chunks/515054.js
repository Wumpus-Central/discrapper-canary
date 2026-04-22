n.d(t, { A: () => C, K: () => E });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(573613),
    o = n(761508),
    c = n(707554),
    d = n(140735),
    u = n(207803),
    _ = n(183555),
    g = n(61881),
    f = n(790417),
    m = n(113763),
    x = n(583246),
    p = n(463259),
    I = n(133583),
    A = n(518477),
    h = n(464229);
function E(e) {
    let { children: t, className: n, scrollerRef: a, ...l } = e;
    return (0, i.jsx)(r.Ip, { ref: a, className: s()(h.gN, n), fade: !0, ...l, children: t });
}
function v(e) {
    let { user: t, currentUser: n, section: a, displayProfile: l, guildId: s, channelId: r, onClose: o } = e;
    return a === A.RP.ACTIVITY
        ? (0, i.jsx)(f.A, { user: t, currentUser: n, displayProfile: l, guildId: s, channelId: r, onClose: o })
        : a === A.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(m.A, { user: t, guildId: s, channelId: r, onClose: o })
          : a === A.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(x.A, { user: t, onClose: o })
            : a === A.RP.WIDGETS
              ? (0, i.jsx)(p.A, { user: t, guildId: s, channelId: r })
              : a === A.RP.WISHLIST
                ? (0, i.jsx)(I.A, { profileOwner: t })
                : null;
}
function C(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: l,
            guildId: s,
            channelId: f,
            items: m,
            initialSection: x,
            onClose: p,
        } = e,
        { trackUserProfileAction: I } = (0, _.NJ)(),
        [{ section: E, text: C }, b] = a.useState(
            m.find((e) => {
                let { section: t } = e;
                return t === x;
            }) ?? m[0],
        );
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsx)(r.Ip, {
                orientation: "horizontal",
                className: h.gU,
                fade: !0,
                paddingFix: !1,
                children: (0, i.jsx)(o.V, {
                    type: "top",
                    look: "custom",
                    selectedItem: E,
                    onItemSelect: (e) => {
                        g.A.hasUnsavedChanges() && E === A.RP.WIDGETS
                            ? (0, u.VQ)()
                            : (I({ action: "PRESS_SECTION", section: e }),
                              b((t) => m.find((t) => t.section === e) ?? t));
                    },
                    children: m.map((e) =>
                        (0, i.jsx)(
                            o.V.Item,
                            { className: h.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(o.V.Panel, {
                id: E,
                "aria-label": C,
                className: h.NM,
                children: (0, i.jsx)(c.F, {
                    component: (0, i.jsx)(d.A, { children: (0, i.jsx)(c.H, { children: C }) }),
                    children: (0, i.jsx)(v, {
                        user: t,
                        currentUser: n,
                        displayProfile: l,
                        guildId: s,
                        channelId: f,
                        section: E,
                        onClose: p,
                    }),
                }),
            }),
        ],
    });
}
