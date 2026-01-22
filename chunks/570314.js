n.d(t, {
    A: () => T,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(177640),
    l = n(297486),
    c = n(342384),
    u = n(204776),
    d = n(734057),
    f = n(309010),
    p = n(954571),
    _ = n(957565),
    h = n(998218),
    m = n(692848),
    g = n(622543),
    E = n(403777),
    b = n(993401),
    y = n(652215),
    O = n(985018);

function A(e, t, n) {
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

function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = I(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function T(e) {
    let { user: t, closePopout: n } = e,
        A = S(e, ["user", "closePopout"]),
        I = i.useRef(null),
        T = (0, a.bG)([g.A], () => {
            var e;
            return null == (e = g.A.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        C = (0, a.bG)([f.A, d.A], () => d.A.getChannel(f.A.getChannelId())),
        N = (0, o.A)(C),
        R = t.id,
        w = i.useCallback(() => {
            null != T &&
                (N
                    ? ((0, l.hg)(T.id),
                      (0, s.OoC)((0, E.n)(R, null == C ? void 0 : C.guild_id)),
                      null == n || n(),
                      p.default.track(y.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, {
                          application_id: T.id,
                      }))
                    : (0, m.o)(
                          v(
                              {
                                  applicationId: T.id,
                              },
                              T,
                          ),
                      ));
        }, [T, N, R, null == C ? void 0 : C.guild_id, n]),
        P = N ? O.intl.string(O.t["Cia+A8"]) : O.intl.string(O.t.NgXl3C);
    if (null == T || !(0, u.Ie)(T)) return null;
    let { customInstallUrl: D } = T,
        x = null == D || h.A.isDiscordUrl(D) ? s.j96 : s.I9m,
        L = N ? void 0 : x;
    return _.p5
        ? (0, r.jsx)(s.YNO, {
              targetElementRef: I,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.W1t, {
                      navId: "user-bot-profile-add-app",
                      onClose: t,
                      "aria-label": O.intl.string(O.t.dbkxVm),
                      onSelect: void 0,
                      children: (0, r.jsx)(s.rXV, {
                          children: (0, r.jsx)(s.Drp, {
                              id: "copy",
                              label: O.intl.string(O.t.XWDihq),
                              action: () => (0, _.C)((0, c.V)(T)),
                          }),
                      }),
                  });
              },
              children: (e) => {
                  let { onClick: t } = e,
                      n = S(e, ["onClick"]);
                  return (0, r.jsx)(
                      b.FD,
                      v(
                          {
                              buttonRef: I,
                              action: "PRESS_ADD_APP",
                              text: P,
                              icon: L,
                              onContextMenu: t,
                              onClick: w,
                          },
                          n,
                          A,
                      ),
                  );
              },
          })
        : (0, r.jsx)(
              b.FD,
              v(
                  {
                      action: "PRESS_ADD_APP",
                      text: P,
                      icon: L,
                      onClick: w,
                      variant: "primary",
                  },
                  A,
              ),
          );
}
