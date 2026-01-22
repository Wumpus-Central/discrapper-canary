n.d(t, { default: () => q }), n(896048);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(110259),
    o = n(158954),
    c = n(311907),
    u = n(421380),
    d = n(397927),
    p = n(308528),
    m = n(681579),
    f = n(843472),
    y = n(608299),
    g = n(565150),
    A = n(139286),
    I = n(429913),
    h = n(571694),
    O = n(47167),
    S = n(301169),
    E = n(451909),
    b = n(734057),
    v = n(31717),
    T = n(71393),
    _ = n(535820),
    w = n(576705),
    j = n(994500),
    C = n(522602),
    x = n(287809),
    N = n(954571),
    D = n(486020),
    U = n(735547),
    P = n(741394),
    k = n(240248),
    M = n(998218),
    R = n(427262),
    L = n(837921),
    G = n(933958),
    F = n(652215),
    V = n(172799),
    K = n(381941),
    H = n(985018),
    B = n(865904);
function q(e) {
    var t, n;
    let { applicationId: a, mediaUrl: r, onClose: u, transitionState: h } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        a = Object.getOwnPropertyNames(e);
                    for (i = 0; i < a.length; i++)
                        (n = a[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]);
            return a;
        })(e, ["applicationId", "mediaUrl", "onClose", "transitionState"]),
        T = (0, c.bG)([G.Ay], () => G.Ay.getCurrentEmbeddedActivity());
    (0, A.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: a,
            activity_session_id: null == T ? void 0 : T.compositeInstanceId,
        },
    });
    let [j] = (0, I.A)([a]),
        D = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        [k, R] = l.useState(""),
        [q, Y] = l.useState([]),
        [J, Q] = l.useState(null),
        [W, Z] = l.useState(null),
        [X, $] = l.useState(!1);
    l.useEffect(() => {
        (async () => {
            let e = M.A.toURLSafe(r);
            if (null == e) return;
            let t = (0, P.uk)(e.pathname),
                n = await fetch(r),
                i = new File([await n.arrayBuffer()], t);
            Q(i);
            let l = new FileReader();
            (l.onload = () => {
                var e;
                return Z(null == l || null == (e = l.result) ? void 0 : e.toString());
            }),
                l.readAsDataURL(i);
        })();
    }, [r, Q]);
    let ee = (0, c.yK)([_.A, w.A], () =>
        _.A.getInviteSuggestionRows().filter(
            (e) => e.type === U.OK.FRIEND || e.type === U.OK.DM || w.A.can(F.xBc.ATTACH_FILES, e.item),
        ),
    );
    l.useEffect(() => {
        (0, m.t)({
            omitUserIds: new Set(),
            applicationId: a,
            inviteTargetType: V.yV.EMBEDDED_APPLICATION,
        });
    }, [a]),
        l.useEffect(() => (0, m.B)(k), [k]),
        l.useEffect(() => {
            let e;
            return (
                X &&
                    (e = setTimeout(() => {
                        $(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [X]);
    let et = l.useCallback(async () => {
            await u();
        }, [u]),
        en = l.useCallback(async () => {
            N.default.track(F.HAw.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: null == D ? void 0 : D.id,
                application_id: a,
                activity_session_id: null == T ? void 0 : T.compositeInstanceId,
            }),
                await L.Ay.copyImage(r),
                $(!0);
        }, [null == T ? void 0 : T.compositeInstanceId, a, r, null == D ? void 0 : D.id]),
        ei = l.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function i(i) {
                let l;
                switch (i.type) {
                    case U.OK.DM:
                    case U.OK.FRIEND:
                        (l = await p.A.ensurePrivateChannel(i.id)), e++;
                        break;
                    case U.OK.GROUP_DM:
                        (l = i.id), t++;
                        break;
                    case U.OK.CHANNEL:
                        (l = i.id), n++;
                        break;
                    default:
                        return;
                }
                let r = b.A.getChannel(l);
                if (null != J) {
                    let e = new File([J], J.name, { type: J.type });
                    y.A.addFile({
                        file: {
                            file: e,
                            platform: g.xz.WEB,
                            origin: "unknown:activity_share",
                        },
                        channelId: l,
                        draftType: v.C.ChannelMessage,
                    });
                }
                let s = C.A.getUploads(l, v.C.ChannelMessage);
                f.A.sendMessage(
                    l,
                    null != j
                        ? E.Ay.parse(
                              r,
                              H.intl.formatToPlainString(H.t.jQULqL, { applicationName: "**".concat(j.name, "**") }),
                          )
                        : {
                              content: "",
                              tts: !1,
                              invalidEmojis: [],
                              validNonShortcutEmojis: [],
                          },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: K.Hx.ACTIVITY_SHARE,
                        applicationId: a,
                        attachmentsToUpload: s,
                        onAttachmentUploadError: (e, t, n) => {
                            var i;
                            (0, S.k)({
                                file: e,
                                guildId: null != (i = null == r ? void 0 : r.getGuildId()) ? i : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    y.A.clearAll(l, v.C.ChannelMessage);
            }
            let l = q.map((e) => i(e));
            N.default.track(F.HAw.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == D ? void 0 : D.id,
                application_id: a,
                activity_session_id: null == T ? void 0 : T.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n,
            });
            try {
                await Promise.all(l),
                    null != j &&
                        (0, d.showToast)(
                            (0, d.createToast)(
                                H.intl.formatToPlainString(H.t.jQULqL, { applicationName: j.name }),
                                d.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, d.showToast)((0, d.createToast)(H.intl.string(H.t.PanA4J), d.ToastType.FAILURE)), e);
            }
            et();
        }, [T, j, a, q, J, et, D]);
    return null == W
        ? (0, i.jsx)(d.y$y, {})
        : (0, i.jsx)(
              o.Modal,
              ((t = (function (e) {
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
              })(
                  {
                      transitionState: h,
                      onClose: et,
                      size: "md",
                      title: H.intl.string(H.t.r9qKow),
                      input: (0, i.jsx)(d.IWV, {
                          placeholder: H.intl.string(H.t["5h0QOP"]),
                          "aria-label": H.intl.string(H.t["5h0QOP"]),
                          query: k,
                          onChange: (e) => R(e),
                          onClear: () => R(""),
                      }),
                      preview: (0, i.jsxs)(d.BJc, {
                          direction: "vertical",
                          align: "center",
                          gap: 12,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: r,
                                  src: W,
                                  className: B.oz,
                              }),
                              q.length >= 10
                                  ? (0, i.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        children: H.intl.format(H.t.mdE9iE, { maxShares: 10 }),
                                    })
                                  : null,
                          ],
                      }),
                      actions: [
                          ...(L.Ay.canCopyImage(r)
                              ? [
                                    {
                                        text: X ? H.intl.string(H.t.t5VZ88) : H.intl.string(H.t.tvUqWn),
                                        onClick: en,
                                        variant: "secondary",
                                        disabled: X,
                                    },
                                ]
                              : []),
                          {
                              text: H.intl.string(H.t.TXNS7S),
                              onClick: ei,
                              variant: "primary",
                              disabled: q.length <= 0,
                          },
                      ],
                  },
                  O,
              )),
              (n = n =
                  {
                      children: ee.map((e, t) =>
                          (0, i.jsxs)(
                              l.Fragment,
                              {
                                  children: [
                                      0 === t ? null : (0, i.jsx)("div", { className: B.ek }),
                                      (0, i.jsx)(z, {
                                          row: e,
                                          onClick: () =>
                                              (() => {
                                                  if (-1 !== q.findIndex((t) => t.id === e.item.id))
                                                      Y(q.filter((t) => t.id !== e.item.id));
                                                  else {
                                                      if (q.length >= 10) return;
                                                      null != J &&
                                                          Y([
                                                              ...q,
                                                              {
                                                                  id: e.item.id,
                                                                  type: e.type,
                                                              },
                                                          ]);
                                                  }
                                              })(),
                                          checked: q.some((t) => t.id === e.item.id),
                                          disabled: !q.some((t) => t.id === e.item.id) && q.length >= 10,
                                      }),
                                  ],
                              },
                              e.item.id,
                          ),
                      ),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t),
          );
}
function z(e) {
    let { row: t, onClick: n, checked: l, disabled: a } = e,
        s = null,
        o = null,
        c = null;
    switch (t.type) {
        case U.OK.DM:
        case U.OK.FRIEND:
            (s = (0, i.jsx)(d.euF, {
                size: d._3J.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (o = R.Ay.getName(t.item)),
                (c = R.Ay.getUserTag(t.item));
            break;
        case U.OK.GROUP_DM: {
            let e = (0, h.Y)(t.item),
                n = (0, O.m1)(t.item, x.default, j.A);
            (s = (0, i.jsx)(d.euF, {
                src: e,
                "aria-label": n,
                size: d._3J.SIZE_40,
            })),
                (o = (0, O.m1)(t.item, x.default, j.A));
            break;
        }
        case U.OK.CHANNEL: {
            let e = t.item,
                n = T.A.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = "#".concat((0, O.m1)(e, x.default, j.A))), (c = n.name), null != n.icon)) {
                let t = D.Ay.getGuildIconURL({
                    id: e.guild_id,
                    icon: n.icon,
                    size: 40,
                });
                s = (0, i.jsx)(d.euF, {
                    src: t,
                    "aria-label": o,
                    size: d._3J.SIZE_40,
                });
            } else {
                let e = (0, k.oN)(n.name);
                s = (0, i.jsx)("div", {
                    className: B.q9,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        children: e,
                    }),
                });
            }
        }
    }
    return (0, i.jsxs)(d.DUT, {
        onClick: n,
        className: r()(B.qd, { [B.r9]: a }),
        children: [
            (0, i.jsxs)("div", {
                className: B.M4,
                children: [
                    (0, i.jsx)("div", {
                        className: B.ud,
                        children: s,
                    }),
                    (0, i.jsxs)("div", {
                        className: B.r2,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                className: r()(B._k, { [B.r9]: a }),
                                children: o,
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                className: r()(B.kF, { [B.r9]: a }),
                                children: c,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(u.Kj, {
                disabled: a,
                value: l,
                type: u.Xo.INVERTED,
                displayOnly: !0,
                className: B.Rd,
            }),
        ],
    });
}
