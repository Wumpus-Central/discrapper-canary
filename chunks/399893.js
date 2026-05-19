e.d(n, { default: () => tt });
var l = e(627968),
    i = e(64700),
    r = e(980707),
    d = e(477782),
    a = e(442433),
    s = e(820284),
    o = e(50268),
    u = e(242934),
    c = e.n(u),
    g = e(989349),
    m = e.n(g),
    b = e(492462),
    A = e(17928),
    h = e(77729),
    x = e(47167),
    p = e(451909),
    v = e(71393),
    y = e(994500),
    f = e(287809),
    E = e(723702),
    j = e(698441),
    D = e(563312),
    G = e(794782),
    _ = e(647090),
    w = e(988794),
    S = e(652215),
    T = e(375708);
let L = "YYYYMMDDTHHmmss",
    R = "YYYY-MM-DDTHH:mm:ss",
    C = /RRULE:.*/;
var k = e(173936),
    N = e(486503),
    I = e(885386),
    X = e(957565),
    M = e(691012),
    Y = e(691540),
    P = e(857250),
    Q = e(97483),
    B = e(732159),
    F = e(192308),
    H = e(834730),
    U = e(931991),
    Z = e(496092),
    q = e(722260),
    J = e(823508),
    V = e(24661),
    W = e(138134),
    $ = e(928658),
    K = e(857071),
    z = e(495544),
    O = e(508654);
function tt(t) {
    let n,
        {
            guildEventId: u,
            recurrenceId: g,
            channel: tt,
            guild: tn,
            analyticsContext: te,
            isRecurrenceItem: tl = !1,
            onSelect: ti,
            target: tr,
        } = t,
        td = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, U.nr)(r ?? i),
                o = (0, A.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                u = (0, q.A)(e, o?.id),
                c = null != o && s(o);
            return a && u?.is_canceled && c
                ? (0, l.jsx)(d.Dr, {
                      id: T.intl.string(T.t.b8606G),
                      label: T.intl.string(T.t.b8606G),
                      action: () => {
                          null != e &&
                              null != u &&
                              (function (t, n, e, l) {
                                  let { scheduled_start_time: i, scheduled_end_time: r } = t;
                                  null == i && null == r
                                      ? Z.A.deleteGuildEventException(n, e, l)
                                      : Z.A.updateGuildEventException(
                                            { scheduled_start_time: i, scheduled_end_time: r, is_canceled: !1 },
                                            n,
                                            e,
                                            l,
                                        );
                              })(u, i.id, n, e);
                      },
                  })
                : null;
        })({ guildEventId: u, recurrenceId: g, guild: tn, channel: tt }),
        ta = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, U.nr)(r ?? i),
                [o, u] = (0, A.yK)([j.Ay], () => [j.Ay.isActive(n), j.Ay.getGuildScheduledEvent(n)]),
                c = (0, q.A)(e, u?.id),
                g = null != u && s(u),
                m = u?.recurrence_rule != null && !a,
                b = (0, D.nh)(n, e);
            if (!g || (o && !m && !a) || (a && !a) || null == u || null == b) return null;
            let { startTime: h } = b;
            if (o && a) {
                if (null == h) return null;
                let t = new Date(c?.scheduled_start_time ?? h);
                if (new Date() > t) return null;
            }
            let x = (t) => {
                (0, F.openModal)((r) =>
                    (0, l.jsx)(B.ConfirmModal, {
                        ...r,
                        title: T.intl.string(T.t.R5bpin),
                        subtitle: T.intl.string(T.t.v2GWNQ),
                        confirmText: m || t ? T.intl.string(T.t["8ZsNv5"]) : T.intl.string(T.t.B9sJLX),
                        cancelText: T.intl.string(T.t.oEAioF),
                        onConfirm: () =>
                            a && !t ? Z.A.deleteRecurrence(i.id, n, e, c) : Z.A.deleteGuildEvent(n, i.id),
                        children:
                            (m || t) &&
                            (0, l.jsx)(H.E, { variant: "text-md/normal", children: T.intl.format(T.t.ZcpcyO, {}) }),
                    }),
                );
            };
            return (0, l.jsx)(d.Dr, {
                id: T.intl.string(T.t.B9sJLX),
                label: T.intl.string(T.t.B9sJLX),
                action: a ? void 0 : () => x(),
                color: "danger",
                children:
                    a &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.tqClly),
                                label: T.intl.string(T.t.tqClly),
                                action: () => x(),
                                disabled: c?.is_canceled,
                                color: "danger",
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.wr33rW),
                                label: T.intl.string(T.t.wr33rW),
                                action: () => x(!0),
                                color: "danger",
                            }),
                        ],
                    }),
            });
        })({ guildEventId: u, recurrenceId: g, guild: tn, channel: tt }),
        ts = (function (t) {
            let { guildEventId: n, guild: i, channel: r, recurrenceId: a, isRecurrenceItem: s } = t,
                { canManageGuildEvent: o } = (0, U.nr)(r ?? i),
                u = (0, A.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                c = o(u),
                g = (0, J.A)(),
                m = (0, q.A)(a, u?.id),
                b = (0, D.nh)(n, a);
            if (!c || null == b || null == u) return null;
            let h = null != u.recurrence_rule && !s,
                x = (t) => {
                    (null == a || t) && !s
                        ? (0, F.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e("84541"),
                                  e.e("8802"),
                                  e.e("25812"),
                                  e.e("25539"),
                                  e.e("24949"),
                                  e.e("79093"),
                                  e.e("28510"),
                                  e.e("116"),
                                  e.e("8891"),
                                  e.e("37687"),
                                  e.e("59957"),
                                  e.e("61156"),
                                  e.e("16767"),
                                  e.e("6841"),
                                  e.e("28136"),
                                  e.e("58337"),
                                  e.e("16084"),
                                  e.e("97073"),
                                  e.e("20683"),
                                  e.e("83420"),
                                  e.e("10262"),
                                  e.e("80436"),
                                  e.e("71329"),
                                  e.e("70644"),
                                  e.e("52695"),
                                  e.e("64287"),
                                  e.e("53934"),
                                  e.e("70089"),
                                  e.e("70160"),
                                  e.e("69647"),
                                  e.e("54450"),
                                  e.e("60423"),
                              ]).then(e.bind(e, 729398));
                              return (e) => (0, l.jsx)(t, { ...e, guildScheduledEventId: n, guildId: i.id });
                          }, g)
                        : null != a &&
                          (0, F.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e("79093"),
                                  e.e("28510"),
                                  e.e("25539"),
                                  e.e("61156"),
                                  e.e("16767"),
                                  e.e("6841"),
                                  e.e("53934"),
                                  e.e("70160"),
                                  e.e("71387"),
                              ]).then(e.bind(e, 216854));
                              return (n) => (0, l.jsx)(t, { ...n, guildEvent: u, recurrenceId: a });
                          }, g);
                };
            return (0, l.jsx)(d.Dr, {
                id: T.intl.string(T.t.Rgy2dU),
                label: T.intl.string(T.t.Rgy2dU),
                action: h ? void 0 : () => x(!0),
                children:
                    h &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.wmVmXN),
                                label: T.intl.string(T.t.wmVmXN),
                                action: () => x(!1),
                                disabled: m?.is_canceled || b.startTime.getTime() < Date.now(),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.BW1Qoh),
                                label: T.intl.string(T.t.BW1Qoh),
                                action: () => x(!0),
                                disabled: new Date(u.scheduled_start_time).getTime() < Date.now(),
                            }),
                        ],
                    }),
            });
        })({ guildEventId: u, guild: tn, channel: tt, recurrenceId: g, isRecurrenceItem: tl }),
        to = (0, V.A)(u, tn, tt),
        tu = (function (t, n, i) {
            let { canManageGuildEvent: r } = (0, U.nr)(i ?? n),
                a = (0, A.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                s = r(a),
                o = null != (0, O.Qs)(i?.id ?? S.dJq),
                u = null != a && (0, j.Fd)(a);
            return !s || u || o
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: T.intl.string(T.t.cK1GGY),
                      label: T.intl.string(T.t.cK1GGY),
                      action: function () {
                          null != a &&
                              (0, F.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      e.e("84541"),
                                      e.e("58337"),
                                      e.e("2329"),
                                      e.e("70644"),
                                      e.e("69772"),
                                  ]).then(e.bind(e, 914119));
                                  return (n) => (0, l.jsx)(t, { ...n, event: a });
                              });
                      },
                  });
        })(u, tn, tt),
        tc = (function (t, n, e) {
            let i = null != e;
            if (null == (0, A.bG)([v.A], () => v.A.getGuild(n), [n])) return null;
            function r() {
                let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = `${location.protocol}//${location.host}${S.BVt.GUILD_EVENT_DETAILS(n, t, l ? null : e)}`;
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
        })(u, tn.id, g),
        tg = (function (t, n) {
            let e = I.Q_.useSetting(),
                { tidaWebformEnabled: r } = N.A.useExperiment(
                    { location: "useCopyEventImageLinkItem" },
                    { autoTrackExposure: !1 },
                ),
                a = (0, A.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t)),
                s = null != a ? (0, M.A)(a) : null,
                o = "event-image" === n.getAttribute("data-type"),
                u = i.useCallback(() => {
                    null != s && (0, X.C)(s);
                }, [s]);
            return X.p5 && e && r && null != s && o
                ? (0, l.jsx)(d.Dr, {
                      id: "copy-event-image-link",
                      label: T.intl.string(T.t["8xHmxo"]),
                      action: u,
                      icon: k.q,
                  })
                : null;
        })(u, tr),
        tm =
            ((n = (0, A.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(u), [u])),
            null == u || null == n
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: "report-event",
                      label: T.intl.string(T.t.IBA5wX),
                      action: () => (0, $.uA)(n),
                      icon: W.i,
                      color: "danger",
                  })),
        tb = (0, o.A)({ id: u, label: T.intl.string(T.t.WZwPO4) }),
        tA = (0, o.A)({ id: g, label: T.intl.string(T.t.NZRGQo) }),
        th = (function (t, n, e, i) {
            let r,
                a = (0, A.bG)([j.Ay], () => j.Ay.isActive(t)),
                s = (0, D.nh)(t ?? "", i),
                o = (0, A.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                u = (0, A.bG)([v.A], () => v.A.getGuild(n), [n]);
            if (a || null == s || null == o) return null;
            r =
                o.entity_type === w.Ps.EXTERNAL
                    ? o.entity_metadata.location
                    : null != e && null != u
                      ? T.intl.formatToPlainString(T.t["2t8L04"], {
                            channelName: (0, x.m1)(e, f.default, y.A),
                            guildName: u.name,
                        })
                      : T.intl.string(T.t.VSgOVg);
            let g = m()(o.scheduled_start_time),
                k = null != o.scheduled_end_time ? m()(o.scheduled_end_time) : g,
                N =
                    null != o.description && "" !== o.description
                        ? p.Ay.unparse(o.description, e?.id ?? S.dJq, !0)
                        : "",
                I = (0, G.Sn)(o.recurrence_rule),
                X = null != I ? (0, _.X7)(I) : null,
                { startTime: M, endTime: Y } = s,
                P = m()(M) ?? g,
                Q = m()(Y ?? M) ?? g,
                B = () => {
                    let t = c()();
                    t.createEvent({ start: g, end: k, summary: o.name, description: N, location: r, repeating: X }),
                        E.isPlatformEmbedded
                            ? h.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
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
                                n = {
                                    text: o.name,
                                    dates: `${g.format(L)}/${k.format(L)}`,
                                    details: N,
                                    action: "TEMPLATE",
                                    location: r,
                                    recur: null != t ? C.exec(t)?.[0] : void 0,
                                },
                                e = `https://calendar.google.com/calendar/render?${(0, b.stringify)(n)}`;
                            window.open(e, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, { id: T.intl.string(T.t.nrBYSe), label: T.intl.string(T.t.nrBYSe), action: B }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.odzaCd),
                        label: T.intl.string(T.t.odzaCd),
                        action: () => {
                            let t = { v: 60, title: o.name, st: P.format(L), et: Q.format(L), desc: N, in_loc: r },
                                n = `https://calendar.yahoo.com/?${(0, b.stringify)(t)}`;
                            window.open(n, "_blank");
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
                                    subject: o.name,
                                    body: N,
                                    location: r,
                                    allday: !1,
                                },
                                n = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, b.stringify)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                ],
            });
        })(u, tn.id, tt, g),
        tx = (function (t) {
            let { guildEventId: n, guildId: e, recurrenceId: i } = t,
                r = (0, A.bG)([K.A], () => K.A.isLurking(e), [e]),
                a = (0, A.bG)([z.default], () => z.default.getId()),
                {
                    rsvped: s,
                    baseRsvp: o,
                    recurrenceRsvp: u,
                } = (0, A.cf)(
                    [j.Ay],
                    () => ({
                        rsvped: j.Ay.isInterestedInEventRecurrence(n, i),
                        baseRsvp: j.Ay.getRsvp(n, null, a),
                        recurrenceRsvp: j.Ay.getRsvp(n, i, a),
                    }),
                    [i, n, a],
                ),
                c = (0, q.A)(i, n);
            if (r || c?.is_canceled) return null;
            let g = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    l = o?.response === w.Qi.INTERESTED ? w.Qi.UNINTERESTED : w.Qi.INTERESTED,
                    r = t ? null : i;
                Z.A.updateRsvp(n, r, e, l);
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
                        disabled: null != u,
                    }),
                ],
            });
        })({ guildEventId: u, guildId: tn.id, recurrenceId: g });
    return (0, l.jsx)(s.A, {
        context: te,
        object: S.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: a.Z_,
            "aria-label": T.intl.string(T.t.liqwPJ),
            onSelect: ti,
            children: [
                (0, l.jsxs)(d.rX, { children: [th, !tl && tu, ts, !tl && to, ta, td, tc, tl && tx] }),
                !tl && (0, l.jsx)(d.rX, { children: tm }),
                null != tg && (0, l.jsx)(d.rX, { children: tg }),
                (0, l.jsxs)(d.rX, { children: [tb, tA] }),
            ],
        }),
    });
}
