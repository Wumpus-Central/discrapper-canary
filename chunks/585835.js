n.d(t, { Z: () => O }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(243814),
    s = n(442837),
    c = n(907862),
    d = n(753450),
    u = n(481060),
    p = n(367907),
    m = n(213459),
    b = n(488915),
    g = n(598077),
    f = n(626135),
    h = n(486199),
    x = n(929507),
    j = n(981631),
    v = n(388032),
    y = n(473059);
function O(e) {
    var t, n, l;
    let {
            name: O,
            icon: _,
            imageSrc: C,
            iconBackgroundColor: N,
            iconClassName: S,
            iconWrapperClassName: Z,
            details: w,
            integration: I,
            buttonText: P,
            buttonDisabled: T,
            hasNextSection: E,
            onButtonClick: k,
            guildId: A,
            isScrolling: D,
            canShowMigrationTooltip: R,
            trailing: L,
        } = e,
        [M, B] = r.useState(!1),
        W = R && !D && !M && void 0 !== A && null != I,
        U = r.useRef(null),
        H = r.useRef(null),
        G =
            null == P || null == k
                ? null
                : E
                  ? (0, i.jsxs)(u.Kqy, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: H,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: P,
                            }),
                            E
                                ? (0, i.jsx)(u.Fbu, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 10,
                                      height: 10,
                                      className: y.caret,
                                  })
                                : null,
                        ],
                    })
                  : (0, i.jsx)(u.zxk, {
                        size: "sm",
                        buttonRef: U,
                        disabled: T,
                        onClick: k,
                        text: P,
                    });
    r.useEffect(() => {
        var e, t;
        W &&
            f.default.track(
                j.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, (0, p.hH)(A))),
                (t = t =
                    {
                        application_id: null == I ? void 0 : I.application.id,
                        location: "overview",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            );
    }, [A, null == I ? void 0 : I.application.id, W]);
    let z =
            W && (null != H.current || null != U.current)
                ? (0, i.jsx)(c.J2, {
                      targetElementRef: E ? H : U,
                      title: v.intl.string(v.t.ufFDiI),
                      body: v.intl.string(v.t.TyMJwM),
                      onRequestClose: () => {
                          B(!0), x.Z.dismissOverviewTooltip(A, I.integration);
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: {
                          position: "top",
                          align: "center",
                      },
                  })
                : null,
        F = (0, s.Wu)([b.Z], () => {
            var e;
            return null != I && null != A && null != (e = b.Z.getApplicationEntitlementsForGuild(I.application.id, A))
                ? e
                : [];
        }),
        K = (0, m.LD)(A, !0),
        q =
            (null == I ? void 0 : I.application) != null &&
            Object.keys(
                null != (l = null == (n = K.result) || null == (t = n.sections[I.application.id]) ? void 0 : t.commands)
                    ? l
                    : {},
            ).length > 0,
        V = (0, i.jsxs)(u.Kqy, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, i.jsx)(h.Z, {
                    name: O,
                    icon: _,
                    imageSrc: C,
                    iconBackgroundColor: N,
                    iconClassName: S,
                    iconWrapperClassName: Z,
                    details: w,
                    isPremium: F.length > 0,
                    children: (function (e, t) {
                        var n, r;
                        if (null == e) return null;
                        let l = [],
                            { application: a, integration: s, webhooks: c } = e;
                        return (
                            null != a.bot &&
                                (null == s || null == (n = s.scopes) ? void 0 : n.includes(o.x.BOT)) &&
                                l.push({
                                    id: "bot",
                                    label: new g.Z(a.bot).isVerifiedBot()
                                        ? v.intl.string(v.t.xxcTGx)
                                        : v.intl.string(v.t.AOdOYm),
                                    icon: u.wGt,
                                }),
                            c.length > 0 &&
                                l.push({
                                    id: "webhooks",
                                    label: v.intl.formatToPlainString(v.t["6HqDfX"], { count: c.length }),
                                    icon: u.tYf,
                                }),
                            (null == s || null == (r = s.scopes) ? void 0 : r.includes(o.x.APPLICATIONS_COMMANDS)) ===
                                !0 &&
                                t &&
                                l.push({
                                    id: "commands",
                                    label: v.intl.string(v.t["0hKkS0"]),
                                    icon: u.SsZ,
                                }),
                            (0, i.jsx)(u.Kqy, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, i.jsx)(d.Q, {
                                    label: v.intl.string(v.t.G8u3JS),
                                    layout: "inline",
                                    items: l,
                                }),
                            })
                        );
                    })(I, q),
                }),
                z,
                G,
                L,
            ],
        });
    return E
        ? (0, i.jsx)(u.P3F, {
              onClick: () => {
                  R && null != A && null != I && x.Z.dismissOverviewTooltip(A, I.integration), null == k || k();
              },
              children: (0, i.jsx)(u.Zbd, {
                  editable: !0,
                  className: a()(y.card, y.clickable),
                  children: V,
              }),
          })
        : (0, i.jsx)(u.Zbd, {
              editable: !0,
              className: y.card,
              children: V,
          });
}
