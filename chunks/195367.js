n.d(t, { Z: () => N }), n(953529), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(913527),
    a = n.n(i),
    s = n(755721),
    o = n(481060),
    c = n(516129),
    u = n(345861),
    d = n(930180),
    m = n(320596),
    x = n(924301),
    g = n(236373),
    h = n(854698),
    v = n(405613),
    p = n(440371),
    f = n(765305),
    j = n(486324),
    b = n(388032),
    y = n(596192);
function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e) {
    let { editBroadcastInfoData: t } = e,
        {
            broadcastInfo: n,
            broadcastToDirectoryChannels: l,
            setBroadcastToDirectoryChannels: i,
            canEveryoneRoleViewEvent: a,
        } = t;
    return n.can_broadcast
        ? (0, r.jsxs)(o.xJW, {
              title: b.intl.string(b.t.BgAW29),
              className: y.formItem,
              children: [
                  (0, r.jsx)(o.ua7, {
                      text: (0, r.jsx)(o.Text, {
                          className: y.broadcastInfoTooltip,
                          variant: "text-sm/normal",
                          children: b.intl.string(b.t.gTgUmZ),
                      }),
                      "aria-label": b.intl.string(b.t.gTgUmZ),
                      shouldShow: !a,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              "div",
                              ((t = O({}, e)),
                              (n = n =
                                  {
                                      children: (0, r.jsx)(o.XZJ, {
                                          type: o.XZJ.Types.INVERTED,
                                          disabled: !a,
                                          value: l,
                                          onChange: (e, t) => i(t),
                                          children: (0, r.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              color: "interactive-active",
                                              children: b.intl.string(b.t["8GW68/"]),
                                          }),
                                      }),
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t),
                          );
                      },
                  }),
                  (0, r.jsx)(o.Text, {
                      className: y.broadcastInfoDescription,
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: b.intl.string(b.t.V8Oq8P),
                  }),
              ],
          })
        : null;
}
function N(e) {
    let {
            guildEvent: t,
            guildEventId: i,
            guildId: N,
            editBroadcastInfoData: I,
            error: S,
            validationErrorMessage: T,
            onChange: P,
            canSetFocus: w = !1,
        } = e,
        {
            entityType: Z,
            channelId: D,
            description: _,
            name: R,
            image: k,
            scheduledEndTime: A,
            scheduledStartTime: U,
            recurrenceRule: M,
        } = t,
        L = (0, d._d)(D),
        G = (0, d.K3)(D),
        z = null != t && (0, x.xt)(t),
        V = l.useMemo(() => {
            let e = (0, h.v1)(t);
            return null != e ? e : { startDate: a()(U) };
        }, [t, U]),
        [W, X] = l.useState(() => (0, h.zi)(a()(U), M)),
        F = l.useRef(null);
    l.useEffect(() => {
        if (w) {
            var e;
            null == (e = F.current) || e.focus();
        }
    }, [w]);
    let B = (e) => {
            P({ image: e });
        },
        Y = (e, t) => {
            if (null == e || void 0 === t) return void B(null);
            (0, o.ZDy)(async () => {
                let { default: l } = await Promise.all([n.e("91689"), n.e("59732"), n.e("14763")]).then(
                    n.bind(n, 712451),
                );
                return (n) =>
                    (0, r.jsx)(
                        l,
                        O(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return B(t);
                                },
                                uploadType: j.pC.SCHEDULED_EVENT_IMAGE,
                            },
                            n,
                        ),
                    );
            });
        },
        q = null == S ? void 0 : S.getFirstFieldErrorMessage("name"),
        H = null == S ? void 0 : S.getFirstFieldErrorMessage("description"),
        J = null == q && null == H ? (null == S ? void 0 : S.getAnyErrorMessage()) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: y.blockedUsersContainer,
                children: null != D && !z && (L > 0 || G > 0) && (0, r.jsx)(m.mv, { channelId: D }),
            }),
            (0, r.jsxs)("div", {
                className: y.form,
                children: [
                    (0, r.jsxs)(o.xJW, {
                        title: b.intl.string(b.t["0HbEQ0"]),
                        className: y.topicFormItem,
                        required: !0,
                        children: [
                            (0, r.jsx)(s.Is, {
                                className: y.textInput,
                                onChange: (e) => {
                                    P({ name: e });
                                },
                                placeholder: b.intl.string(b.t["6/yarq"]),
                                maxLength: f.p,
                                value: R,
                                autoComplete: "off",
                                inputRef: F,
                            }),
                            (0, r.jsx)(C, { error: q }),
                            (0, r.jsx)(C, { error: J }),
                        ],
                    }),
                    (0, r.jsx)(p.Z, {
                        className: y.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                r = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString(),
                                };
                            null != t &&
                                null != A &&
                                (null == n ? void 0 : n.isBefore(t)) &&
                                (r.scheduledEndTime = t.add(1, "hour").toISOString()),
                                null != t && null != W && (r.recurrenceRule = (0, h.mF)(W, t)),
                                P(r);
                        },
                        onRecurrenceChange: (e) => {
                            let t = V.startDate;
                            null != t && (P({ recurrenceRule: (0, h.mF)(e, t) }), X(e));
                        },
                        schedule: V,
                        recurrenceRule: M,
                        showEndDate: Z === f.WX.EXTERNAL,
                        requireEndDate: Z === f.WX.EXTERNAL,
                        disableStartDateTime: z,
                        guildId: N,
                    }),
                    (0, r.jsx)(C, { error: T }),
                    (0, r.jsxs)(o.xJW, {
                        title: b.intl.string(b.t["+gRCCw"]),
                        className: y.formItem,
                        children: [
                            (0, r.jsx)(s.iS, {
                                placeholder: b.intl.string(b.t["kWO/Ex"]),
                                value: _,
                                onChange: (e) => {
                                    P({ description: e });
                                },
                                maxLength: f.wm,
                                autosize: !0,
                            }),
                            (0, r.jsx)(C, { error: H }),
                        ],
                    }),
                    (0, r.jsxs)(o.xJW, {
                        title: b.intl.string(b.t.Ly121d),
                        className: y.formItem,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: y.addImageHint,
                                children: b.intl.string(b.t.B9C9bW),
                            }),
                            null != k
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(c.Z, {
                                              className: y.imagePreview,
                                              iconWrapperClassName: y.imagePreviewInner,
                                              image: k,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != N) {
                                                      var n;
                                                      return null != (n = (0, v.Z)((0, g.Gb)(t, N, i))) ? n : null;
                                                  }
                                              },
                                              onChange: Y,
                                              hint: b.intl.string(b.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0,
                                          }),
                                          (0, r.jsx)(o.zxk, {
                                              variant: "primary",
                                              size: "sm",
                                              text: b.intl.string(b.t.gmUvOz),
                                              onClick: () => B(null),
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)(u.Z, {
                                      size: s.zx.Sizes.SMALL,
                                      onChange: Y,
                                      buttonCTA: b.intl.string(b.t.vKCGYW),
                                  }),
                        ],
                    }),
                    (0, r.jsx)(E, { editBroadcastInfoData: I }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, r.jsx)(o.Text, {
              color: "text-danger",
              variant: "text-xs/normal",
              className: y.warning,
              children: t,
          });
}
