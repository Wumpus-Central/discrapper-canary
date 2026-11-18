n.d(e, { A: () => D });
var i = n(477900),
    l = n(582128),
    o = n(570287),
    s = n(855986),
    r = n(22231),
    a = n(265872),
    d = n(165862),
    u = n(477782),
    c = n(267102),
    A = n(474397),
    p = n(206835),
    E = n(46653),
    b = n(71393),
    g = n(207803),
    R = n(183555),
    v = n(61881),
    x = n(993401),
    I = n(652215),
    f = n(792996);
function h(t) {
    let { user: e, guildId: n, fullWidth: o, appContext: h, onClose: C } = t,
        m = (0, s.bG)([E.default], () => E.default.getId() === e.id),
        D = (0, s.bG)([b.A], () => (null != n ? b.A.getGuild(n) : null)),
        L = (0, s.bG)([v.A], () => v.A.hasUnsavedChanges()),
        j = (0, c.Us)() === I.BRT.OVERLAY,
        F = (0, p.A)({ guild: D }),
        O = (0, p.A)({}),
        { trackUserProfileAction: _ } = (0, R.NJ)(),
        P = l.useRef(null);
    return m
        ? null == D
            ? (0, i.jsx)(x.FD, {
                  action: "EDIT_PROFILE",
                  text: f.intl.string(f.t.s5vZlQ),
                  icon: r.PencilIcon,
                  autoFocus: !0,
                  fullWidth: o,
                  variant: "primary",
                  onClick: () => {
                      L ? (0, g.VQ)() : (C?.(), O(), (0, A.A)(h));
                  },
                  disabled: j,
              })
            : (0, i.jsx)(a.Y, {
                  targetElementRef: P,
                  align: o ? "center" : void 0,
                  renderPopout: (t) => {
                      let { closePopout: e } = t;
                      return (0, i.jsxs)(d.W, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: e,
                          "aria-label": f.intl.string(f.t.AXIHpV),
                          children: [
                              (0, i.jsx)(u.Dr, {
                                  id: "edit-server-profile",
                                  label: f.intl.string(f.t["PKQB/H"]),
                                  subtext: f.intl.string(f.t.VYHWKJ),
                                  action: () => {
                                      (_({ action: "EDIT_GUILD_PROFILE" }), C?.(), F(), (0, A.A)(h));
                                  },
                              }),
                              (0, i.jsx)(u.Dr, {
                                  id: "edit-main-profile",
                                  label: f.intl.string(f.t.HmFaFB),
                                  subtext: f.intl.string(f.t["+EERMk"]),
                                  action: () => {
                                      (_({ action: "EDIT_PROFILE" }), C?.(), O(), (0, A.A)(h));
                                  },
                              }),
                          ],
                      });
                  },
                  children: (t) => {
                      let { onClick: e, ...n } = t;
                      return (0, i.jsx)(x.FD, {
                          buttonRef: P,
                          text: f.intl.string(f.t.s5vZlQ),
                          icon: r.PencilIcon,
                          autoFocus: !0,
                          fullWidth: o,
                          variant: "primary",
                          onClick: () => {
                              L ? (0, g.VQ)() : e?.();
                          },
                          ...n,
                          disabled: j,
                      });
                  },
              })
        : null;
}
var C = n(784886),
    m = n(47453);
function D(t) {
    let { user: e, guildId: n, channelId: l, onClose: s, appContext: r, disableAutoFocus: a = !1 } = t,
        d = (0, o.A)(e.id, n);
    return (0, i.jsxs)("div", {
        className: m.qr,
        children: [
            d && (0, i.jsx)(C.A, { user: e, guildId: n, channelId: l, onClose: s, disableAutoFocus: a }),
            !d && (0, i.jsx)(h, { user: e, guildId: n, onClose: s, fullWidth: !0, appContext: r }),
        ],
    });
}
