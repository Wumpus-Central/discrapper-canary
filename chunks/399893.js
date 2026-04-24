n.d(t, { default: () => ee });
var l = n(627968),
    i = n(64700),
    r = n(550079),
    a = n(477782),
    d = n(442433),
    s = n(820284),
    u = n(50268),
    o = n(242934),
    c = n.n(o),
    g = n(989349),
    E = n.n(g),
    A = n(492462),
    m = n(17928),
    f = n(77729),
    y = n(47167),
    _ = n(451909),
    h = n(71393),
    N = n(994500),
    T = n(287809),
    v = n(723702),
    b = n(698441),
    G = n(563312),
    p = n(794782),
    x = n(974930),
    D = n(988794),
    S = n(652215),
    C = n(985018);
let I = "YYYYMMDDTHHmmss",
    w = "YYYY-MM-DDTHH:mm:ss",
    j = /RRULE:.*/;
var L = n(173936),
    M = n(486503),
    P = n(253932),
    U = n(957565),
    O = n(691012),
    R = n(691540),
    V = n(857250),
    B = n(97483),
    k = n(732159),
    Y = n(192308),
    H = n(834730),
    X = n(931991),
    F = n(496092),
    W = n(722260),
    Q = n(823508),
    K = n(24661),
    q = n(138134),
    z = n(928658),
    Z = n(857071),
    J = n(495544),
    $ = n(508654);
function ee(e) {
    let t,
        {
            guildEventId: o,
            recurrenceId: g,
            channel: ee,
            guild: et,
            analyticsContext: en,
            isRecurrenceItem: el = !1,
            onSelect: ei,
            target: er,
        } = e,
        ea = (function (e) {
            let { guildEventId: t, recurrenceId: n, guild: i, channel: r } = e,
                d = null != n,
                { canManageGuildEvent: s } = (0, X.nr)(r ?? i),
                u = (0, m.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(t)),
                o = (0, W.A)(n, u?.id),
                c = null != u && s(u);
            return d && o?.is_canceled && c
                ? (0, l.jsx)(a.Dr, {
                      id: C.intl.string(C.t.b8606G),
                      label: C.intl.string(C.t.b8606G),
                      action: () => {
                          null != n &&
                              null != o &&
                              (function (e, t, n, l) {
                                  let { scheduled_start_time: i, scheduled_end_time: r } = e;
                                  null == i && null == r
                                      ? F.A.deleteGuildEventException(t, n, l)
                                      : F.A.updateGuildEventException(
                                            { scheduled_start_time: i, scheduled_end_time: r, is_canceled: !1 },
                                            t,
                                            n,
                                            l,
                                        );
                              })(o, i.id, t, n);
                      },
                  })
                : null;
        })({ guildEventId: o, recurrenceId: g, guild: et, channel: ee }),
        ed = (function (e) {
            let { guildEventId: t, recurrenceId: n, guild: i, channel: r } = e,
                d = null != n,
                { canManageGuildEvent: s } = (0, X.nr)(r ?? i),
                [u, o] = (0, m.yK)([b.Ay], () => [b.Ay.isActive(t), b.Ay.getGuildScheduledEvent(t)]),
                c = (0, W.A)(n, o?.id),
                g = null != o && s(o),
                E = o?.recurrence_rule != null && !d,
                A = (0, G.nh)(t, n);
            if (!g || (u && !E && !d) || (d && !d) || null == o || null == A) return null;
            let { startTime: f } = A;
            if (u && d) {
                if (null == f) return null;
                let e = new Date(c?.scheduled_start_time ?? f);
                if (new Date() > e) return null;
            }
            let y = (e) => {
                (0, Y.openModal)((r) =>
                    (0, l.jsx)(k.ConfirmModal, {
                        ...r,
                        title: C.intl.string(C.t.R5bpin),
                        subtitle: C.intl.string(C.t.v2GWNQ),
                        confirmText: E || e ? C.intl.string(C.t["8ZsNv5"]) : C.intl.string(C.t.B9sJLX),
                        cancelText: C.intl.string(C.t.oEAioF),
                        onConfirm: () =>
                            d && !e ? F.A.deleteRecurrence(i.id, t, n, c) : F.A.deleteGuildEvent(t, i.id),
                        children:
                            (E || e) &&
                            (0, l.jsx)(H.E, { variant: "text-md/normal", children: C.intl.format(C.t.ZcpcyO, {}) }),
                    }),
                );
            };
            return (0, l.jsx)(a.Dr, {
                id: C.intl.string(C.t.B9sJLX),
                label: C.intl.string(C.t.B9sJLX),
                action: d ? void 0 : () => y(),
                color: "danger",
                children:
                    d &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.Dr, {
                                id: C.intl.string(C.t.tqClly),
                                label: C.intl.string(C.t.tqClly),
                                action: () => y(),
                                disabled: c?.is_canceled,
                                color: "danger",
                            }),
                            (0, l.jsx)(a.Dr, {
                                id: C.intl.string(C.t.wr33rW),
                                label: C.intl.string(C.t.wr33rW),
                                action: () => y(!0),
                                color: "danger",
                            }),
                        ],
                    }),
            });
        })({ guildEventId: o, recurrenceId: g, guild: et, channel: ee }),
        es = (function (e) {
            let { guildEventId: t, guild: i, channel: r, recurrenceId: d, isRecurrenceItem: s } = e,
                { canManageGuildEvent: u } = (0, X.nr)(r ?? i),
                o = (0, m.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(t)),
                c = u(o),
                g = (0, Q.A)(),
                E = (0, W.A)(d, o?.id),
                A = (0, G.nh)(t, d);
            if (!c || null == A || null == o) return null;
            let f = null != o.recurrence_rule && !s,
                y = (e) => {
                    (null == d || e) && !s
                        ? (0, Y.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("68883"),
                                  n.e("28136"),
                                  n.e("68587"),
                                  n.e("60423"),
                                  n.e("8757"),
                              ]).then(n.bind(n, 729398));
                              return (n) => (0, l.jsx)(e, { ...n, guildScheduledEventId: t, guildId: i.id });
                          }, g)
                        : null != d &&
                          (0, Y.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("68883"), n.e("71387")]).then(
                                  n.bind(n, 216854),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, guildEvent: o, recurrenceId: d });
                          }, g);
                };
            return (0, l.jsx)(a.Dr, {
                id: C.intl.string(C.t.Rgy2dU),
                label: C.intl.string(C.t.Rgy2dU),
                action: f ? void 0 : () => y(!0),
                children:
                    f &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.Dr, {
                                id: C.intl.string(C.t.wmVmXN),
                                label: C.intl.string(C.t.wmVmXN),
                                action: () => y(!1),
                                disabled: E?.is_canceled || A.startTime.getTime() < Date.now(),
                            }),
                            (0, l.jsx)(a.Dr, {
                                id: C.intl.string(C.t.BW1Qoh),
                                label: C.intl.string(C.t.BW1Qoh),
                                action: () => y(!0),
                                disabled: new Date(o.scheduled_start_time).getTime() < Date.now(),
                            }),
                        ],
                    }),
            });
        })({ guildEventId: o, guild: et, channel: ee, recurrenceId: g, isRecurrenceItem: el }),
        eu = (0, K.A)(o, et, ee),
        eo = (function (e, t, i) {
            let { canManageGuildEvent: r } = (0, X.nr)(i ?? t),
                d = (0, m.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(e), [e]),
                s = r(d),
                u = null != (0, $.Qs)(i?.id ?? S.dJq),
                o = null != d && (0, b.Fd)(d);
            return !s || o || u
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: C.intl.string(C.t.cK1GGY),
                      label: C.intl.string(C.t.cK1GGY),
                      action: function () {
                          null != d &&
                              (0, Y.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("69772"), n.e("18489")]).then(
                                      n.bind(n, 914119),
                                  );
                                  return (t) => (0, l.jsx)(e, { ...t, event: d });
                              });
                      },
                  });
        })(o, et, ee),
        ec = (function (e, t, n) {
            let i = null != n;
            if (null == (0, m.bG)([h.A], () => h.A.getGuild(t), [t])) return null;
            function r() {
                let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = `${location.protocol}//${location.host}${S.BVt.GUILD_EVENT_DETAILS(t, e, l ? null : n)}`;
                (0, U.C)(i, () => (0, R.P0)((0, V.o)(C.intl.string(C.t["L/PwZf"]), B.Ck.SUCCESS)));
            }
            return (0, l.jsx)(a.Dr, {
                id: C.intl.string(C.t["9o+VKx"]),
                label: C.intl.string(C.t["9o+VKx"]),
                action: i ? void 0 : () => r(!0),
                children:
                    i &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.Dr, {
                                id: C.intl.string(C.t.QLtDqP),
                                label: C.intl.string(C.t.QLtDqP),
                                action: () => r(!1),
                            }),
                            (0, l.jsx)(a.Dr, {
                                id: C.intl.string(C.t.AYnhB7),
                                label: C.intl.string(C.t.AYnhB7),
                                action: () => r(!0),
                            }),
                        ],
                    }),
            });
        })(o, et.id, g),
        eg = (function (e, t) {
            let n = P.Q_.useSetting(),
                { tidaWebformEnabled: r } = M.A.useExperiment(
                    { location: "useCopyEventImageLinkItem" },
                    { autoTrackExposure: !1 },
                ),
                d = (0, m.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(e)),
                s = null != d ? (0, O.A)(d) : null,
                u = "event-image" === t.getAttribute("data-type"),
                o = i.useCallback(() => {
                    null != s && (0, U.C)(s);
                }, [s]);
            return U.p5 && n && r && null != s && u
                ? (0, l.jsx)(a.Dr, {
                      id: "copy-event-image-link",
                      label: C.intl.string(C.t["8xHmxo"]),
                      action: o,
                      icon: L.q,
                  })
                : null;
        })(o, er),
        eE =
            ((t = (0, m.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(o), [o])),
            null == o || null == t
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "report-event",
                      label: C.intl.string(C.t.IBA5wX),
                      action: () => (0, z.uA)(t),
                      icon: q.i,
                      color: "danger",
                  })),
        eA = (0, u.A)({ id: o, label: C.intl.string(C.t.WZwPO4) }),
        em = (0, u.A)({ id: g, label: C.intl.string(C.t.NZRGQo) }),
        ef = (function (e, t, n, i) {
            let r,
                d = (0, m.bG)([b.Ay], () => b.Ay.isActive(e)),
                s = (0, G.nh)(e ?? "", i),
                u = (0, m.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(e), [e]),
                o = (0, m.bG)([h.A], () => h.A.getGuild(t), [t]);
            if (d || null == s || null == u) return null;
            r =
                u.entity_type === D.Ps.EXTERNAL
                    ? u.entity_metadata.location
                    : null != n && null != o
                      ? C.intl.formatToPlainString(C.t["2t8L04"], {
                            channelName: (0, y.m1)(n, T.default, N.A),
                            guildName: o.name,
                        })
                      : C.intl.string(C.t.VSgOVg);
            let g = E()(u.scheduled_start_time),
                L = null != u.scheduled_end_time ? E()(u.scheduled_end_time) : g,
                M =
                    null != u.description && "" !== u.description
                        ? _.Ay.unparse(u.description, n?.id ?? S.dJq, !0)
                        : "",
                P = (0, p.Sn)(u.recurrence_rule),
                U = null != P ? (0, x.X7)(P) : null,
                { startTime: O, endTime: R } = s,
                V = E()(O) ?? g,
                B = E()(R ?? O) ?? g,
                k = () => {
                    let e = c()();
                    e.createEvent({ start: g, end: L, summary: u.name, description: M, location: r, repeating: U }),
                        v.isPlatformEmbedded
                            ? f.A.fileManager.saveWithDialog(e.toString(), "discord-event.ics")
                            : window.open(e.toURL(), "_blank");
                };
            return (0, l.jsxs)(a.Dr, {
                id: C.intl.string(C.t.k5pvjo),
                label: C.intl.string(C.t.k5pvjo),
                action: k,
                children: [
                    (0, l.jsx)(a.Dr, {
                        id: C.intl.string(C.t.JKSLRH),
                        label: C.intl.string(C.t.JKSLRH),
                        action: () => {
                            let e = U?.toString(),
                                t = {
                                    text: u.name,
                                    dates: `${g.format(I)}/${L.format(I)}`,
                                    details: M,
                                    action: "TEMPLATE",
                                    location: r,
                                    recur: null != e ? j.exec(e)?.[0] : void 0,
                                },
                                n = `https://calendar.google.com/calendar/render?${(0, A.stringify)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                    (0, l.jsx)(a.Dr, { id: C.intl.string(C.t.nrBYSe), label: C.intl.string(C.t.nrBYSe), action: k }),
                    (0, l.jsx)(a.Dr, {
                        id: C.intl.string(C.t.odzaCd),
                        label: C.intl.string(C.t.odzaCd),
                        action: () => {
                            let e = { v: 60, title: u.name, st: V.format(I), et: B.format(I), desc: M, in_loc: r },
                                t = `https://calendar.yahoo.com/?${(0, A.stringify)(e)}`;
                            window.open(t, "_blank");
                        },
                    }),
                    (0, l.jsx)(a.Dr, {
                        id: C.intl.string(C.t.rQe8EE),
                        label: C.intl.string(C.t.rQe8EE),
                        action: () => {
                            let e = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: V.format(w),
                                    enddt: B.format(w),
                                    subject: u.name,
                                    body: M,
                                    location: r,
                                    allday: !1,
                                },
                                t = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, A.stringify)(e)}`;
                            window.open(t, "_blank");
                        },
                    }),
                ],
            });
        })(o, et.id, ee, g),
        ey = (function (e) {
            let { guildEventId: t, guildId: n, recurrenceId: i } = e,
                r = (0, m.bG)([Z.A], () => Z.A.isLurking(n), [n]),
                d = (0, m.bG)([J.default], () => J.default.getId()),
                {
                    rsvped: s,
                    baseRsvp: u,
                    recurrenceRsvp: o,
                } = (0, m.cf)(
                    [b.Ay],
                    () => ({
                        rsvped: b.Ay.isInterestedInEventRecurrence(t, i),
                        baseRsvp: b.Ay.getRsvp(t, null, d),
                        recurrenceRsvp: b.Ay.getRsvp(t, i, d),
                    }),
                    [i, t, d],
                ),
                c = (0, W.A)(i, t);
            if (r || c?.is_canceled) return null;
            let g = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    l = u?.response === D.Qi.INTERESTED ? D.Qi.UNINTERESTED : D.Qi.INTERESTED,
                    r = e ? null : i;
                F.A.updateRsvp(t, r, n, l);
            };
            return (0, l.jsxs)(a.Dr, {
                id: s ? C.intl.string(C.t["7M5gaN"]) : C.intl.string(C.t.FXixvH),
                label: s ? C.intl.string(C.t["7M5gaN"]) : C.intl.string(C.t.FXixvH),
                action: void 0,
                children: [
                    (0, l.jsx)(a.Dr, {
                        id: C.intl.string(C.t.lwZCFT),
                        label: C.intl.string(C.t.lwZCFT),
                        action: () => g(!1),
                    }),
                    (0, l.jsx)(a.Dr, {
                        id: C.intl.string(C.t.uoorxi),
                        label: C.intl.string(C.t.uoorxi),
                        action: () => g(!0),
                        disabled: null != o,
                    }),
                ],
            });
        })({ guildEventId: o, guildId: et.id, recurrenceId: g });
    return (0, l.jsx)(s.A, {
        context: en,
        object: S.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: d.Z_,
            "aria-label": C.intl.string(C.t.liqwPJ),
            onSelect: ei,
            children: [
                (0, l.jsxs)(a.rX, { children: [ef, !el && eo, es, !el && eu, ed, ea, ec, el && ey] }),
                !el && (0, l.jsx)(a.rX, { children: eE }),
                null != eg && (0, l.jsx)(a.rX, { children: eg }),
                (0, l.jsxs)(a.rX, { children: [eA, em] }),
            ],
        }),
    });
}
