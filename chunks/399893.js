e.d(n, { default: () => z });
var l = e(477900),
    i = e(582128),
    r = e(980707),
    d = e(477782),
    a = e(442433),
    s = e(820284),
    u = e(50268),
    o = e(979361),
    c = e.n(o),
    g = e(536637),
    f = e.n(g),
    m = e(492462),
    b = e(17928),
    x = e(77729),
    h = e(47167),
    A = e(451909),
    p = e(71393),
    v = e(994500),
    y = e(287809),
    E = e(723702),
    j = e(698441),
    D = e(563312),
    G = e(794782),
    _ = e(974930),
    w = e(988794),
    T = e(652215),
    S = e(105292);
let L = "YYYYMMDDTHHmmss",
    R = "YYYY-MM-DDTHH:mm:ss",
    k = /RRULE:.*/;
var I = e(173936),
    N = e(486503),
    C = e(885386),
    X = e(957565),
    Y = e(691012),
    M = e(858899),
    P = e(192308),
    Q = e(732159),
    B = e(834730),
    F = e(931991),
    H = e(496092),
    Z = e(722260),
    J = e(823508),
    U = e(24661),
    V = e(138134),
    W = e(928658),
    $ = e(857071),
    q = e(280450),
    K = e(508654);
function z(t) {
    let n,
        {
            guildEventId: o,
            recurrenceId: g,
            channel: z,
            guild: O,
            analyticsContext: tt,
            isRecurrenceItem: tn = !1,
            onSelect: te,
            target: tl,
        } = t,
        ti = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, F.nr)(r ?? i),
                u = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                o = (0, Z.A)(e, u?.id),
                c = null != u && s(u);
            return a && o?.is_canceled && c
                ? (0, l.jsx)(d.Dr, {
                      id: S.intl.string(S.t.b8606G),
                      label: S.intl.string(S.t.b8606G),
                      action: function () {
                          null != e &&
                              null != o &&
                              (function (t, n, e, l) {
                                  let { scheduled_start_time: i, scheduled_end_time: r } = t;
                                  null == i && null == r
                                      ? H.default.deleteGuildEventException(n, e, l)
                                      : H.default.updateGuildEventException(
                                            { scheduled_start_time: i, scheduled_end_time: r, is_canceled: !1 },
                                            n,
                                            e,
                                            l,
                                        );
                              })(o, i.id, n, e);
                      },
                  })
                : null;
        })({ guildEventId: o, recurrenceId: g, guild: O, channel: z }),
        tr = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, F.nr)(r ?? i),
                [u, o] = (0, b.yK)([j.Ay], () => [j.Ay.isActive(n), j.Ay.getGuildScheduledEvent(n)]),
                c = (0, Z.A)(e, o?.id),
                g = null != o && s(o),
                f = o?.recurrence_rule != null && !a,
                m = (0, D.nh)(n, e);
            if (!g || (u && !f && !a) || (a && !a) || null == o || null == m) return null;
            let { startTime: x } = m;
            if (u && a) {
                if (null == x) return null;
                let t = new Date(c?.scheduled_start_time ?? x);
                if (new Date() > t) return null;
            }
            function h(t) {
                (0, P.openModal)((r) =>
                    (0, l.jsx)(Q.u, {
                        ...r,
                        title: S.intl.string(S.t.R5bpin),
                        subtitle: S.intl.string(S.t.v2GWNQ),
                        confirmText: f || t ? S.intl.string(S.t["8ZsNv5"]) : S.intl.string(S.t.B9sJLX),
                        cancelText: S.intl.string(S.t.oEAioF),
                        onConfirm: () =>
                            a && !t ? H.default.deleteRecurrence(i.id, n, e, c) : H.default.deleteGuildEvent(n, i.id),
                        children:
                            (f || t) &&
                            (0, l.jsx)(B.E, { variant: "text-md/normal", children: S.intl.format(S.t.ZcpcyO, {}) }),
                    }),
                );
            }
            return (0, l.jsx)(d.Dr, {
                id: S.intl.string(S.t.B9sJLX),
                label: S.intl.string(S.t.B9sJLX),
                action: a ? void 0 : () => h(),
                color: "danger",
                children:
                    a &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.tqClly),
                                label: S.intl.string(S.t.tqClly),
                                action: () => h(),
                                disabled: c?.is_canceled,
                                color: "danger",
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.wr33rW),
                                label: S.intl.string(S.t.wr33rW),
                                action: () => h(!0),
                                color: "danger",
                            }),
                        ],
                    }),
            });
        })({ guildEventId: o, recurrenceId: g, guild: O, channel: z }),
        td = (function (t) {
            let { guildEventId: n, guild: i, channel: r, recurrenceId: a, isRecurrenceItem: s } = t,
                { canManageGuildEvent: u } = (0, F.nr)(r ?? i),
                o = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                c = u(o),
                g = (0, J.A)(),
                f = (0, Z.A)(a, o?.id),
                m = (0, D.nh)(n, a);
            if (!c || null == m || null == o) return null;
            let x = null != o.recurrence_rule && !s;
            function h(t) {
                null != o &&
                    ((null == a || t) && !s
                        ? (0, P.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e("489565"),
                                  e.e("998835"),
                                  e.e("468555"),
                                  e.e("142753"),
                                  e.e("862179"),
                                  e.e("191601"),
                                  e.e("936875"),
                                  e.e("401425"),
                                  e.e("370017"),
                                  e.e("730931"),
                                  e.e("711162"),
                                  e.e("998392"),
                                  e.e("948054"),
                                  e.e("161379"),
                                  e.e("50015"),
                                  e.e("592028"),
                                  e.e("232551"),
                                  e.e("631644"),
                                  e.e("425906"),
                                  e.e("123216"),
                                  e.e("897073"),
                                  e.e("147786"),
                                  e.e("268582"),
                                  e.e("958428"),
                                  e.e("96588"),
                                  e.e("843719"),
                                  e.e("837687"),
                                  e.e("858337"),
                                  e.e("820683"),
                                  e.e("159957"),
                                  e.e("728136"),
                                  e.e("216084"),
                                  e.e("643104"),
                                  e.e("847158"),
                                  e.e("480436"),
                                  e.e("409391"),
                                  e.e("810262"),
                                  e.e("756684"),
                                  e.e("970644"),
                                  e.e("752695"),
                                  e.e("769014"),
                                  e.e("853934"),
                                  e.e("469647"),
                                  e.e("670089"),
                                  e.e("870160"),
                                  e.e("454450"),
                                  e.e("222689"),
                                  e.e("426226"),
                              ]).then(e.bind(e, 303224));
                              return (e) => (0, l.jsx)(t, { ...e, guildScheduledEventId: n, guildId: i.id });
                          }, g)
                        : null != a &&
                          (0, P.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e("730931"),
                                  e.e("232551"),
                                  e.e("853934"),
                                  e.e("870160"),
                                  e.e("871387"),
                              ]).then(e.bind(e, 216854));
                              return (n) => (0, l.jsx)(t, { ...n, guildEvent: o, recurrenceId: a });
                          }, g));
            }
            return (0, l.jsx)(d.Dr, {
                id: S.intl.string(S.t.Rgy2dU),
                label: S.intl.string(S.t.Rgy2dU),
                action: x ? void 0 : () => h(!0),
                children:
                    x &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.wmVmXN),
                                label: S.intl.string(S.t.wmVmXN),
                                action: () => h(!1),
                                disabled: f?.is_canceled || m.startTime.getTime() < Date.now(),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.BW1Qoh),
                                label: S.intl.string(S.t.BW1Qoh),
                                action: () => h(!0),
                                disabled: new Date(o.scheduled_start_time).getTime() < Date.now(),
                            }),
                        ],
                    }),
            });
        })({ guildEventId: o, guild: O, channel: z, recurrenceId: g, isRecurrenceItem: tn }),
        ta = (0, U.A)(o, O, z),
        ts = (function (t, n, i) {
            let { canManageGuildEvent: r } = (0, F.nr)(i ?? n),
                a = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                s = r(a),
                u = null != (0, K.Qs)(i?.id ?? T.dJq),
                o = null != a && (0, j.Fd)(a);
            return !s || o || u
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: S.intl.string(S.t.cK1GGY),
                      label: S.intl.string(S.t.cK1GGY),
                      action: function () {
                          null != a &&
                              (0, P.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      e.e("998835"),
                                      e.e("107427"),
                                      e.e("858337"),
                                      e.e("2329"),
                                      e.e("970644"),
                                      e.e("69772"),
                                  ]).then(e.bind(e, 914119));
                                  return (n) => (0, l.jsx)(t, { ...n, event: a });
                              });
                      },
                  });
        })(o, O, z),
        tu = (function (t, n, e) {
            let i = null != e;
            if (null == (0, b.bG)([p.A], () => p.A.getGuild(n), [n])) return null;
            function r() {
                let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = `${location.protocol}//${location.host}${T.BVt.GUILD_EVENT_DETAILS(n, t, l ? null : e)}`;
                (0, X.C)(i, () => (0, M.P0)({ text: S.intl.string(S.t["L/PwZf"]), variant: "success" }));
            }
            return (0, l.jsx)(d.Dr, {
                id: S.intl.string(S.t["9o+VKx"]),
                label: S.intl.string(S.t["9o+VKx"]),
                action: i ? void 0 : () => r(!0),
                children:
                    i &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.QLtDqP),
                                label: S.intl.string(S.t.QLtDqP),
                                action: () => r(!1),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: S.intl.string(S.t.AYnhB7),
                                label: S.intl.string(S.t.AYnhB7),
                                action: () => r(!0),
                            }),
                        ],
                    }),
            });
        })(o, O.id, g),
        to = (function (t, n) {
            let e = C.Q_.useSetting(),
                { tidaWebformEnabled: r } = N.A.useExperiment(
                    { location: "useCopyEventImageLinkItem" },
                    { autoTrackExposure: !1 },
                ),
                a = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t)),
                s = null != a ? (0, Y.A)(a) : null,
                u = "event-image" === n.getAttribute("data-type"),
                o = i.useCallback(() => {
                    null != s && (0, X.C)(s);
                }, [s]);
            return X.p5 && e && r && null != s && u
                ? (0, l.jsx)(d.Dr, {
                      id: "copy-event-image-link",
                      label: S.intl.string(S.t["8xHmxo"]),
                      action: o,
                      icon: I.LinkIcon,
                  })
                : null;
        })(o, tl),
        tc =
            ((n = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(o), [o])),
            null == o || null == n
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: "report-event",
                      label: S.intl.string(S.t.IBA5wX),
                      action: function () {
                          if (null != n) return (0, W.uA)(n);
                      },
                      icon: V.FlagIcon,
                      color: "danger",
                  })),
        tg = (0, u.A)({ id: o, label: S.intl.string(S.t.WZwPO4) }),
        tf = (0, u.A)({ id: g, label: S.intl.string(S.t.NZRGQo) }),
        tm = (function (t, n, e, i) {
            let r,
                a = (0, b.bG)([j.Ay], () => j.Ay.isActive(t)),
                s = (0, D.nh)(t ?? "", i),
                u = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
                o = (0, b.bG)([p.A], () => p.A.getGuild(n), [n]);
            if (a || null == s || null == u) return null;
            r =
                u.entity_type === w.Ps.EXTERNAL
                    ? u.entity_metadata.location
                    : null != e && null != o
                      ? S.intl.formatToPlainString(S.t["2t8L04"], {
                            channelName: (0, h.m1)(e, y.default, v.A),
                            guildName: o.name,
                        })
                      : S.intl.string(S.t.VSgOVg);
            let g = f()(u.scheduled_start_time),
                I = null != u.scheduled_end_time ? f()(u.scheduled_end_time) : g,
                N =
                    null != u.description && "" !== u.description
                        ? A.Ay.unparse(u.description, e?.id ?? T.dJq, !0)
                        : "",
                C = (0, G.Sn)(u.recurrence_rule),
                X = null != C ? (0, _.X7)(C) : null,
                { startTime: Y, endTime: M } = s,
                P = f()(Y) ?? g,
                Q = f()(M ?? Y) ?? g;
            function B() {
                if (null == u) return;
                let t = c()();
                (t.createEvent({ start: g, end: I, summary: u.name, description: N, location: r, repeating: X }),
                    E.isPlatformEmbedded
                        ? x.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                        : window.open(t.toURL(), "_blank"));
            }
            return (0, l.jsxs)(d.Dr, {
                id: S.intl.string(S.t.k5pvjo),
                label: S.intl.string(S.t.k5pvjo),
                action: B,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.JKSLRH),
                        label: S.intl.string(S.t.JKSLRH),
                        action: function () {
                            if (null == u) return;
                            let t = X?.toString(),
                                n = {
                                    text: u.name,
                                    dates: `${g.format(L)}/${I.format(L)}`,
                                    details: N,
                                    action: "TEMPLATE",
                                    location: r,
                                    recur: null != t ? k.exec(t)?.[0] : void 0,
                                },
                                e = `https://calendar.google.com/calendar/render?${(0, m.stringify)(n)}`;
                            window.open(e, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, { id: S.intl.string(S.t.nrBYSe), label: S.intl.string(S.t.nrBYSe), action: B }),
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.odzaCd),
                        label: S.intl.string(S.t.odzaCd),
                        action: function () {
                            if (null == u) return;
                            let t = { v: 60, title: u.name, st: P.format(L), et: Q.format(L), desc: N, in_loc: r },
                                n = `https://calendar.yahoo.com/?${(0, m.stringify)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.rQe8EE),
                        label: S.intl.string(S.t.rQe8EE),
                        action: function () {
                            if (null == u) return;
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
                                n = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, m.stringify)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                ],
            });
        })(o, O.id, z, g),
        tb = (function (t) {
            let { guildEventId: n, guildId: e, recurrenceId: i } = t,
                r = (0, b.bG)([$.A], () => $.A.isLurking(e), [e]),
                a = (0, b.bG)([q.default], () => q.default.getId()),
                {
                    rsvped: s,
                    baseRsvp: u,
                    recurrenceRsvp: o,
                } = (0, b.cf)(
                    [j.Ay],
                    () => ({
                        rsvped: j.Ay.isInterestedInEventRecurrence(n, i),
                        baseRsvp: j.Ay.getRsvp(n, null, a),
                        recurrenceRsvp: j.Ay.getRsvp(n, i, a),
                    }),
                    [i, n, a],
                ),
                c = (0, Z.A)(i, n);
            if (r || c?.is_canceled) return null;
            function g() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    l = u?.response === w.Qi.INTERESTED ? w.Qi.UNINTERESTED : w.Qi.INTERESTED,
                    r = t ? null : i;
                H.default.updateRsvp(n, r, e, l);
            }
            return (0, l.jsxs)(d.Dr, {
                id: s ? S.intl.string(S.t["7M5gaN"]) : S.intl.string(S.t.FXixvH),
                label: s ? S.intl.string(S.t["7M5gaN"]) : S.intl.string(S.t.FXixvH),
                action: void 0,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.lwZCFT),
                        label: S.intl.string(S.t.lwZCFT),
                        action: () => g(!1),
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: S.intl.string(S.t.uoorxi),
                        label: S.intl.string(S.t.uoorxi),
                        action: () => g(!0),
                        disabled: null != o,
                    }),
                ],
            });
        })({ guildEventId: o, guildId: O.id, recurrenceId: g });
    return (0, l.jsx)(s.A, {
        context: tt,
        object: T.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: a.Z_,
            "aria-label": S.intl.string(S.t.liqwPJ),
            onSelect: te,
            children: [
                (0, l.jsxs)(d.rX, { children: [tm, !tn && ts, td, !tn && ta, tr, ti, tu, tn && tb] }),
                !tn && (0, l.jsx)(d.rX, { children: tc }),
                null != to && (0, l.jsx)(d.rX, { children: to }),
                (0, l.jsxs)(d.rX, { children: [tg, tf] }),
            ],
        }),
    });
}
