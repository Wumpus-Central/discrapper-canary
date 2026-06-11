n.d(e, { default: () => tt });
var l = n(627968),
    i = n(64700),
    r = n(980707),
    d = n(477782),
    a = n(442433),
    s = n(820284),
    u = n(50268),
    o = n(242934),
    c = n.n(o),
    g = n(989349),
    m = n.n(g),
    b = n(492462),
    h = n(17928),
    x = n(77729),
    A = n(47167),
    f = n(451909),
    p = n(71393),
    v = n(994500),
    y = n(287809),
    E = n(723702),
    j = n(698441),
    D = n(563312),
    G = n(794782),
    _ = n(647090),
    w = n(988794),
    S = n(652215),
    T = n(375708);
let L = "YYYYMMDDTHHmmss",
    R = "YYYY-MM-DDTHH:mm:ss",
    C = /RRULE:.*/;
var k = n(173936),
    N = n(486503),
    I = n(885386),
    X = n(957565),
    M = n(691012),
    Y = n(691540),
    P = n(857250),
    Q = n(97483),
    B = n(732159),
    F = n(192308),
    H = n(834730),
    U = n(931991),
    Z = n(496092),
    q = n(722260),
    J = n(823508),
    V = n(24661),
    W = n(138134),
    $ = n(928658),
    K = n(857071),
    z = n(495544),
    O = n(508654);
function tt(t) {
    let e,
        {
            guildEventId: o,
            recurrenceId: g,
            channel: tt,
            guild: te,
            analyticsContext: tn,
            isRecurrenceItem: tl = !1,
            onSelect: ti,
            target: tr,
        } = t,
        td = (function (t) {
            let { guildEventId: e, recurrenceId: n, guild: i, channel: r } = t,
                a = null != n,
                { canManageGuildEvent: s } = (0, U.nr)(r ?? i),
                u = (0, h.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(e)),
                o = (0, q.A)(n, u?.id),
                c = null != u && s(u);
            return a && o?.is_canceled && c
                ? (0, l.jsx)(d.Dr, {
                      id: T.intl.string(T.t.b8606G),
                      label: T.intl.string(T.t.b8606G),
                      action: () => {
                          null != n &&
                              null != o &&
                              (function (t, e, n, l) {
                                  let { scheduled_start_time: i, scheduled_end_time: r } = t;
                                  null == i && null == r
                                      ? Z.default.deleteGuildEventException(e, n, l)
                                      : Z.default.updateGuildEventException(
                                            { scheduled_start_time: i, scheduled_end_time: r, is_canceled: !1 },
                                            e,
                                            n,
                                            l,
                                        );
                              })(o, i.id, e, n);
                      },
                  })
                : null;
        })({ guildEventId: o, recurrenceId: g, guild: te, channel: tt }),
        ta = (function (t) {
            let { guildEventId: e, recurrenceId: n, guild: i, channel: r } = t,
                a = null != n,
                { canManageGuildEvent: s } = (0, U.nr)(r ?? i),
                [u, o] = (0, h.yK)([j.Ay], () => [j.Ay.isActive(e), j.Ay.getGuildScheduledEvent(e)]),
                c = (0, q.A)(n, o?.id),
                g = null != o && s(o),
                m = o?.recurrence_rule != null && !a,
                b = (0, D.nh)(e, n);
            if (!g || (u && !m && !a) || (a && !a) || null == o || null == b) return null;
            let { startTime: x } = b;
            if (u && a) {
                if (null == x) return null;
                let t = new Date(c?.scheduled_start_time ?? x);
                if (new Date() > t) return null;
            }
            let A = (t) => {
                (0, F.openModal)((r) =>
                    (0, l.jsx)(B.ConfirmModal, {
                        ...r,
                        title: T.intl.string(T.t.R5bpin),
                        subtitle: T.intl.string(T.t.v2GWNQ),
                        confirmText: m || t ? T.intl.string(T.t["8ZsNv5"]) : T.intl.string(T.t.B9sJLX),
                        cancelText: T.intl.string(T.t.oEAioF),
                        onConfirm: () =>
                            a && !t ? Z.default.deleteRecurrence(i.id, e, n, c) : Z.default.deleteGuildEvent(e, i.id),
                        children:
                            (m || t) &&
                            (0, l.jsx)(H.E, { variant: "text-md/normal", children: T.intl.format(T.t.ZcpcyO, {}) }),
                    }),
                );
            };
            return (0, l.jsx)(d.Dr, {
                id: T.intl.string(T.t.B9sJLX),
                label: T.intl.string(T.t.B9sJLX),
                action: a ? void 0 : () => A(),
                color: "danger",
                children:
                    a &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.tqClly),
                                label: T.intl.string(T.t.tqClly),
                                action: () => A(),
                                disabled: c?.is_canceled,
                                color: "danger",
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.wr33rW),
                                label: T.intl.string(T.t.wr33rW),
                                action: () => A(!0),
                                color: "danger",
                            }),
                        ],
                    }),
            });
        })({ guildEventId: o, recurrenceId: g, guild: te, channel: tt }),
        ts = (function (t) {
            let { guildEventId: e, guild: i, channel: r, recurrenceId: a, isRecurrenceItem: s } = t,
                { canManageGuildEvent: u } = (0, U.nr)(r ?? i),
                o = (0, h.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(e)),
                c = u(o),
                g = (0, J.A)(),
                m = (0, q.A)(a, o?.id),
                b = (0, D.nh)(e, a);
            if (!c || null == b || null == o) return null;
            let x = null != o.recurrence_rule && !s,
                A = (t) => {
                    (null == a || t) && !s
                        ? (0, F.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  n.e("31618"),
                                  n.e("2677"),
                                  n.e("66879"),
                                  n.e("19675"),
                                  n.e("88826"),
                                  n.e("28510"),
                                  n.e("51143"),
                                  n.e("71106"),
                                  n.e("78704"),
                                  n.e("8891"),
                                  n.e("37687"),
                                  n.e("61156"),
                                  n.e("58337"),
                                  n.e("16767"),
                                  n.e("59957"),
                                  n.e("6841"),
                                  n.e("28136"),
                                  n.e("20683"),
                                  n.e("97073"),
                                  n.e("16084"),
                                  n.e("10262"),
                                  n.e("80436"),
                                  n.e("71329"),
                                  n.e("70644"),
                                  n.e("52695"),
                                  n.e("64287"),
                                  n.e("53934"),
                                  n.e("70089"),
                                  n.e("70160"),
                                  n.e("69647"),
                                  n.e("54450"),
                                  n.e("60423"),
                              ]).then(n.bind(n, 729398));
                              return (n) => (0, l.jsx)(t, { ...n, guildScheduledEventId: e, guildId: i.id });
                          }, g)
                        : null != a &&
                          (0, F.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  n.e("88826"),
                                  n.e("28510"),
                                  n.e("19675"),
                                  n.e("61156"),
                                  n.e("16767"),
                                  n.e("6841"),
                                  n.e("53934"),
                                  n.e("70160"),
                                  n.e("71387"),
                              ]).then(n.bind(n, 216854));
                              return (e) => (0, l.jsx)(t, { ...e, guildEvent: o, recurrenceId: a });
                          }, g);
                };
            return (0, l.jsx)(d.Dr, {
                id: T.intl.string(T.t.Rgy2dU),
                label: T.intl.string(T.t.Rgy2dU),
                action: x ? void 0 : () => A(!0),
                children:
                    x &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.wmVmXN),
                                label: T.intl.string(T.t.wmVmXN),
                                action: () => A(!1),
                                disabled: m?.is_canceled || b.startTime.getTime() < Date.now(),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.BW1Qoh),
                                label: T.intl.string(T.t.BW1Qoh),
                                action: () => A(!0),
                                disabled: new Date(o.scheduled_start_time).getTime() < Date.now(),
                            }),
                        ],
                    }),
            });
        })({ guildEventId: o, guild: te, channel: tt, recurrenceId: g, isRecurrenceItem: tl }),
        tu = (0, V.A)(o, te, tt),
        to = (function (t, e, i) {
            let { canManageGuildEvent: r } = (0, U.nr)(i ?? e),
                a = (0, h.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                s = r(a),
                u = null != (0, O.Qs)(i?.id ?? S.dJq),
                o = null != a && (0, j.Fd)(a);
            return !s || o || u
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: T.intl.string(T.t.cK1GGY),
                      label: T.intl.string(T.t.cK1GGY),
                      action: function () {
                          null != a &&
                              (0, F.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("31618"),
                                      n.e("2329"),
                                      n.e("58337"),
                                      n.e("70644"),
                                      n.e("69772"),
                                  ]).then(n.bind(n, 914119));
                                  return (e) => (0, l.jsx)(t, { ...e, event: a });
                              });
                      },
                  });
        })(o, te, tt),
        tc = (function (t, e, n) {
            let i = null != n;
            if (null == (0, h.bG)([p.A], () => p.A.getGuild(e), [e])) return null;
            function r() {
                let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = `${location.protocol}//${location.host}${S.BVt.GUILD_EVENT_DETAILS(e, t, l ? null : n)}`;
                (0, X.C)(i, () => (0, Y.P0)((0, P.o)(T.intl.string(T.t["L/PwZf"]), Q.Ck.SUCCESS)));
            }
            return (0, l.jsx)(d.Dr, {
                id: T.intl.string(T.t["9o+VKx"]),
                label: T.intl.string(T.t["9o+VKx"]),
                action: i ? void 0 : () => r(!0),
                children:
                    i &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.QLtDqP),
                                label: T.intl.string(T.t.QLtDqP),
                                action: () => r(!1),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.AYnhB7),
                                label: T.intl.string(T.t.AYnhB7),
                                action: () => r(!0),
                            }),
                        ],
                    }),
            });
        })(o, te.id, g),
        tg = (function (t, e) {
            let n = I.Q_.useSetting(),
                { tidaWebformEnabled: r } = N.A.useExperiment(
                    { location: "useCopyEventImageLinkItem" },
                    { autoTrackExposure: !1 },
                ),
                a = (0, h.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t)),
                s = null != a ? (0, M.A)(a) : null,
                u = "event-image" === e.getAttribute("data-type"),
                o = i.useCallback(() => {
                    null != s && (0, X.C)(s);
                }, [s]);
            return X.p5 && n && r && null != s && u
                ? (0, l.jsx)(d.Dr, {
                      id: "copy-event-image-link",
                      label: T.intl.string(T.t["8xHmxo"]),
                      action: o,
                      icon: k.q,
                  })
                : null;
        })(o, tr),
        tm =
            ((e = (0, h.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(o), [o])),
            null == o || null == e
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: "report-event",
                      label: T.intl.string(T.t.IBA5wX),
                      action: () => (0, $.uA)(e),
                      icon: W.i,
                      color: "danger",
                  })),
        tb = (0, u.A)({ id: o, label: T.intl.string(T.t.WZwPO4) }),
        th = (0, u.A)({ id: g, label: T.intl.string(T.t.NZRGQo) }),
        tx = (function (t, e, n, i) {
            let r,
                a = (0, h.bG)([j.Ay], () => j.Ay.isActive(t)),
                s = (0, D.nh)(t ?? "", i),
                u = (0, h.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                o = (0, h.bG)([p.A], () => p.A.getGuild(e), [e]);
            if (a || null == s || null == u) return null;
            r =
                u.entity_type === w.Ps.EXTERNAL
                    ? u.entity_metadata.location
                    : null != n && null != o
                      ? T.intl.formatToPlainString(T.t["2t8L04"], {
                            channelName: (0, A.m1)(n, y.default, v.A),
                            guildName: o.name,
                        })
                      : T.intl.string(T.t.VSgOVg);
            let g = m()(u.scheduled_start_time),
                k = null != u.scheduled_end_time ? m()(u.scheduled_end_time) : g,
                N =
                    null != u.description && "" !== u.description
                        ? f.Ay.unparse(u.description, n?.id ?? S.dJq, !0)
                        : "",
                I = (0, G.Sn)(u.recurrence_rule),
                X = null != I ? (0, _.X7)(I) : null,
                { startTime: M, endTime: Y } = s,
                P = m()(M) ?? g,
                Q = m()(Y ?? M) ?? g,
                B = () => {
                    let t = c()();
                    t.createEvent({ start: g, end: k, summary: u.name, description: N, location: r, repeating: X }),
                        E.isPlatformEmbedded
                            ? x.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                            : window.open(t.toURL(), "_blank");
                };
            return (0, l.jsxs)(d.Dr, {
                id: T.intl.string(T.t.k5pvjo),
                label: T.intl.string(T.t.k5pvjo),
                action: B,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.JKSLRH),
                        label: T.intl.string(T.t.JKSLRH),
                        action: () => {
                            let t = X?.toString(),
                                e = {
                                    text: u.name,
                                    dates: `${g.format(L)}/${k.format(L)}`,
                                    details: N,
                                    action: "TEMPLATE",
                                    location: r,
                                    recur: null != t ? C.exec(t)?.[0] : void 0,
                                },
                                n = `https://calendar.google.com/calendar/render?${(0, b.stringify)(e)}`;
                            window.open(n, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, { id: T.intl.string(T.t.nrBYSe), label: T.intl.string(T.t.nrBYSe), action: B }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.odzaCd),
                        label: T.intl.string(T.t.odzaCd),
                        action: () => {
                            let t = { v: 60, title: u.name, st: P.format(L), et: Q.format(L), desc: N, in_loc: r },
                                e = `https://calendar.yahoo.com/?${(0, b.stringify)(t)}`;
                            window.open(e, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.rQe8EE),
                        label: T.intl.string(T.t.rQe8EE),
                        action: () => {
                            let t = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: P.format(R),
                                    enddt: Q.format(R),
                                    subject: u.name,
                                    body: N,
                                    location: r,
                                    allday: !1,
                                },
                                e = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, b.stringify)(t)}`;
                            window.open(e, "_blank");
                        },
                    }),
                ],
            });
        })(o, te.id, tt, g),
        tA = (function (t) {
            let { guildEventId: e, guildId: n, recurrenceId: i } = t,
                r = (0, h.bG)([K.A], () => K.A.isLurking(n), [n]),
                a = (0, h.bG)([z.default], () => z.default.getId()),
                {
                    rsvped: s,
                    baseRsvp: u,
                    recurrenceRsvp: o,
                } = (0, h.cf)(
                    [j.Ay],
                    () => ({
                        rsvped: j.Ay.isInterestedInEventRecurrence(e, i),
                        baseRsvp: j.Ay.getRsvp(e, null, a),
                        recurrenceRsvp: j.Ay.getRsvp(e, i, a),
                    }),
                    [i, e, a],
                ),
                c = (0, q.A)(i, e);
            if (r || c?.is_canceled) return null;
            let g = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    l = u?.response === w.Qi.INTERESTED ? w.Qi.UNINTERESTED : w.Qi.INTERESTED,
                    r = t ? null : i;
                Z.default.updateRsvp(e, r, n, l);
            };
            return (0, l.jsxs)(d.Dr, {
                id: s ? T.intl.string(T.t["7M5gaN"]) : T.intl.string(T.t.FXixvH),
                label: s ? T.intl.string(T.t["7M5gaN"]) : T.intl.string(T.t.FXixvH),
                action: void 0,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.lwZCFT),
                        label: T.intl.string(T.t.lwZCFT),
                        action: () => g(!1),
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.uoorxi),
                        label: T.intl.string(T.t.uoorxi),
                        action: () => g(!0),
                        disabled: null != o,
                    }),
                ],
            });
        })({ guildEventId: o, guildId: te.id, recurrenceId: g });
    return (0, l.jsx)(s.A, {
        context: tn,
        object: S.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: a.Z_,
            "aria-label": T.intl.string(T.t.liqwPJ),
            onSelect: ti,
            children: [
                (0, l.jsxs)(d.rX, { children: [tx, !tl && to, ts, !tl && tu, ta, td, tc, tl && tA] }),
                !tl && (0, l.jsx)(d.rX, { children: tm }),
                null != tg && (0, l.jsx)(d.rX, { children: tg }),
                (0, l.jsxs)(d.rX, { children: [tb, th] }),
            ],
        }),
    });
}
