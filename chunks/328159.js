n.d(t, { Z: () => f }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(596454),
    o = n(318766),
    c = n(907040),
    d = n(456268),
    u = n(999382),
    m = n(185923),
    g = n(388032);
let p = (e) => {
        var t;
        let {
                reason: n = "",
                emoji_name: d,
                onSetReason: g,
                onSelectEmoji: p,
                onClearPressed: f,
                reasonMinLength: h,
                reasonMaxLength: x,
                placeholder: b,
                position: j,
            } = e,
            v = i.useRef(null),
            [_, O] = i.useState(!1),
            y = (0, l.e7)([u.Z], () => u.Z.isGuildMetadataLoaded()),
            C = (0, r.jsx)(s.yRy, {
                targetElementRef: v,
                onRequestClose: () => {
                    O(!1);
                },
                shouldShow: _,
                position: "right",
                align: "top",
                animation: s.yRy.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(c.Z, {
                        pickerIntention: m.Hz.COMMUNITY_CONTENT,
                        closePopout: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r } = e;
                            null != n && p(n), r && t();
                        },
                    });
                },
                children: () =>
                    (0, r.jsx)(o.Z, {
                        active: !1,
                        onClick: () => {
                            O(!0);
                        },
                        tabIndex: 0,
                        renderButtonContents:
                            null != d
                                ? () =>
                                      (0, r.jsx)(a.Z, {
                                          emojiName: d,
                                          animated: !1,
                                      })
                                : null,
                        ref: v,
                    }),
            });
        return (0, r.jsx)(
            s.oil,
            {
                placeholder: b,
                value: n,
                minLength: h,
                maxLength: x,
                defaultDirty: (null == n ? void 0 : n.length) > 0,
                leading: {
                    type: "emoji",
                    button: C,
                },
                onChange: (e) => {
                    g(e);
                },
                clearable: { show: (null != (t = null == n ? void 0 : n.length) ? t : 0) > 0 || null != d },
                onClear: f,
            },
            "text-input-".concat(j, "-").concat(y),
        );
    },
    f = (e) => {
        let { reasonMinLength: t, reasonMaxLength: n, guildId: i, reasons: l } = e,
            a = [
                g.intl.string(g.t["9dhBGh"]),
                g.intl.string(g.t["8RmhKC"]),
                g.intl.string(g.t["2t0V8/"]),
                g.intl.string(g.t.l8WqCQ),
            ],
            o = [];
        for (let e = 0; e < 4; e++)
            o.push(
                (0, r.jsx)(
                    p,
                    (function (e, t) {
                        return (
                            (t = null != t ? t : {}),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(t)).forEach(function (n) {
                                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                  }),
                            e
                        );
                    })(
                        (function (e) {
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
                        })(
                            {
                                position: e,
                                placeholder: a[e],
                            },
                            l[e],
                        ),
                        {
                            onSetReason: (t) => {
                                let n = [...l],
                                    r = Object.assign({}, l[e], { reason: t });
                                (n[e] = r), (0, d.P$)(i, n);
                            },
                            onSelectEmoji: (t) => {
                                let n = [...l],
                                    r = Object.assign({}, l[e], { emoji_name: t.optionallyDiverseSequence });
                                (n[e] = r), (0, d.P$)(i, n);
                            },
                            onClearPressed: () => {
                                let t = [...l],
                                    n = {
                                        reason: "",
                                        emoji_name: null,
                                    };
                                (t[e] = n), (0, d.P$)(i, t);
                            },
                            reasonMinLength: t,
                            reasonMaxLength: n,
                        },
                    ),
                    "reasonListItem-" + e,
                ),
            );
        return (0, r.jsx)(s.Kqy, {
            gap: 16,
            children: o,
        });
    };
