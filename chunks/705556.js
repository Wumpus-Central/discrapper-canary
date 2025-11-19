n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(887413),
    l = n(300284),
    c = n(314897),
    u = n(430824),
    d = n(785717),
    f = n(592183),
    _ = n(224724),
    p = n(732380),
    h = n(388032),
    m = n(792771);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    let { user: t, guildId: n, fullWidth: g, appContext: y, onClose: O } = e,
        v = (0, a.e7)([c.default], () => c.default.getId() === t.id),
        I = (0, a.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        T = (0, a.e7)([_.Z], () => _.Z.hasSaveablePendingChanges()),
        S = (0, l.Z)({ guild: I }),
        A = (0, l.Z)({}),
        { trackUserProfileAction: C } = (0, d.KZ)(),
        N = i.useRef(null);
    return v
        ? null == I
            ? (0, r.jsx)(p.O1, {
                  action: "EDIT_PROFILE",
                  text: h.intl.string(h.t.s5vZlQ),
                  icon: o.vdY,
                  autoFocus: !0,
                  fullWidth: g,
                  variant: "primary",
                  onClick: () => {
                      if (T) return void f.Z.notifyPendingWidgets();
                      null == O || O(), A(), (0, s.i)(y);
                  },
              })
            : (0, r.jsx)(o.yRy, {
                  targetElementRef: N,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsxs)(o.v2r, {
                          className: m.popoutMenu,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: () => {
                              t(), null == O || O();
                          },
                          "aria-label": h.intl.string(h.t.AXIHpV),
                          children: [
                              (0, r.jsx)(o.sNh, {
                                  id: "edit-server-profile",
                                  label: h.intl.string(h.t["PKQB/H"]),
                                  subtext: h.intl.string(h.t.VYHWKJ),
                                  action: () => {
                                      C({ action: "EDIT_GUILD_PROFILE" }), S(), (0, s.i)(y);
                                  },
                              }),
                              (0, r.jsx)(o.sNh, {
                                  id: "edit-main-profile",
                                  label: h.intl.string(h.t.HmFaFB),
                                  subtext: h.intl.string(h.t["+EERMk"]),
                                  action: () => {
                                      C({ action: "EDIT_PROFILE" }), A(), (0, s.i)(y);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (e) => {
                      var { onClick: t } = e,
                          n = b(e, ["onClick"]);
                      return (0, r.jsx)(
                          p.O1,
                          E(
                              {
                                  buttonRef: N,
                                  text: h.intl.string(h.t.s5vZlQ),
                                  icon: o.vdY,
                                  autoFocus: !0,
                                  fullWidth: g,
                                  variant: "primary",
                                  onClick: () => {
                                      if (T) return void f.Z.notifyPendingWidgets();
                                      null == t || t();
                                  },
                              },
                              n,
                          ),
                      );
                  },
              })
        : null;
}
