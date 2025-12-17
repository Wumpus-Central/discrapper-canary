t.d(n, { default: () => w });
var r = t(54381),
    i = t(473749),
    l = t(392711),
    a = t.n(l),
    c = t(442837),
    o = t(481060),
    s = t(45114),
    u = t(493773),
    d = t(313201),
    g = t(720202),
    m = t(430824),
    h = t(306680),
    p = t(626135),
    j = t(823379);
t(981888);
var x = t(709054),
    v = t(897285),
    f = t(518756),
    b = t(554747),
    C = t(710679),
    y = t(74562),
    N = t(576749),
    Z = t(765305),
    O = t(981631),
    k = t(490897),
    P = t(388032),
    E = t(855183);
function w(e) {
    let { transitionState: n, onClose: l, guildId: w } = e,
        S = (0, d.Dt)(),
        I = (0, c.e7)([m.Z], () => m.Z.getGuild(w)),
        T = (0, f.Z)(null == I ? void 0 : I.id),
        D = (0, b.ZP)(w),
        _ = i.useRef(h.ZP.ackMessageId(w, k.W.GUILD_EVENT)),
        G = (0, N.Z)();
    return (
        i.useEffect(() => {
            D.forEach((e) => v.Z.getGuildEventUserCounts(w, e.id, [])), v.Z.getGuildEventsForCurrentUser(w);
        }, [D, w]),
        (0, u.ZP)(() => {
            p.default.track(O.rMx.OPEN_MODAL, {
                type: Z.zw,
                guild_id: w,
                guild_events_count: D.length,
            });
        }),
        i.useEffect(() => {
            a()(D)
                .map((e) => e.creator_id)
                .filter(j.lm)
                .uniq()
                .forEach((e) => {
                    g.Z.requestMember(w, e);
                });
        }, [w, D]),
        i.useEffect(() => {
            null != w && (0, s.Ju)(w, k.W.GUILD_EVENT);
        }, [w]),
        (0, r.jsxs)(o.Y0X, {
            size: o.CgR.MEDIUM,
            transitionState: n,
            "aria-labelledby": S,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, r.jsxs)(o.xBx, {
                    className: E.header,
                    "data-migration-pending": !0,
                    children: [
                        (0, r.jsx)(o.Que, {
                            size: "md",
                            color: "currentColor",
                            className: E.icon,
                        }),
                        (0, r.jsx)(o.Heading, {
                            id: S,
                            variant: "heading-md/semibold",
                            children:
                                D.length > 0
                                    ? P.intl.formatToPlainString(P.t.IBdqSu, { number: D.length })
                                    : P.intl.string(P.t.tlopTM),
                        }),
                        T &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: E.divider,
                                        children: "|",
                                    }),
                                    (0, r.jsx)(o.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, o.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("49049"),
                                                    t.e("36599"),
                                                    t.e("61"),
                                                    t.e("62470"),
                                                ]).then(t.bind(t, 779250));
                                                return (n) => {
                                                    var t, i;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    t,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    r.forEach(function (n) {
                                                                        var r;
                                                                        (r = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[n] = r);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, n)),
                                                        (i = i = { guildId: w }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(i),
                                                              )
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, r);
                                                                  }
                                                                  return t;
                                                              })(Object(i)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(i, e),
                                                                  );
                                                              }),
                                                        t),
                                                    );
                                                };
                                            }, G);
                                        },
                                        text: P.intl.string(P.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(o.P3F, {
                            onClick: l,
                            className: E.iconButton,
                            "aria-label": P.intl.string(P.t.cpT0Cq),
                            children: (0, r.jsx)(o.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: E.icon,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(o.hzk, {
                    className: E.content,
                    "data-migration-pending": !0,
                    children:
                        D.length > 0
                            ? D.map((e) =>
                                  (0, r.jsx)(
                                      C.Z,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != _.current && x.default.compare(e.id, _.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, r.jsx)(y.Z, {
                                  guildId: w,
                                  onClose: l,
                              }),
                }),
            ],
        })
    );
}
