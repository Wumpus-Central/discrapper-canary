e.d(n, { default: () => tt });
var l = e(477900),
    i = e(582128),
    r = e(980707),
    d = e(477782),
    a = e(442433),
    s = e(820284),
    u = e(50268),
    o = e(242934),
    c = e.n(o),
    g = e(989349),
    f = e.n(g),
    m = e(492462),
    b = e(17928),
    h = e(77729),
    x = e(47167),
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
    S = e(652215),
    T = e(375708);
let L = "YYYYMMDDTHHmmss",
    R = "YYYY-MM-DDTHH:mm:ss",
    k = /RRULE:.*/;
var C = e(173936),
    I = e(486503),
    N = e(885386),
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
    J = e(722260),
    V = e(823508),
    W = e(24661),
    $ = e(138134),
    q = e(928658),
    K = e(857071),
    z = e(280450),
    O = e(508654);
function tt(t) {
    let n,
        {
            guildEventId: o,
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
                u = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                o = (0, J.A)(e, u?.id),
                c = null != u && s(u);
            return a && o?.is_canceled && c
                ? (0, l.jsx)(d.Dr, {
                      id: T.intl.string(T.t.b8606G),
                      label: T.intl.string(T.t.b8606G),
                      action: function () {
                          null != e &&
                              null != o &&
                              (function (t, n, e, l) {
                                  let { scheduled_start_time: i, scheduled_end_time: r } = t;
                                  null == i && null == r
                                      ? Z.default.deleteGuildEventException(n, e, l)
                                      : Z.default.updateGuildEventException(
                                            { scheduled_start_time: i, scheduled_end_time: r, is_canceled: !1 },
                                            n,
                                            e,
                                            l,
                                        );
                              })(o, i.id, n, e);
                      },
                  })
                : null;
        })({ guildEventId: o, recurrenceId: g, guild: tn, channel: tt }),
        ta = (function (t) {
            let { guildEventId: n, recurrenceId: e, guild: i, channel: r } = t,
                a = null != e,
                { canManageGuildEvent: s } = (0, U.nr)(r ?? i),
                [u, o] = (0, b.yK)([j.Ay], () => [j.Ay.isActive(n), j.Ay.getGuildScheduledEvent(n)]),
                c = (0, J.A)(e, o?.id),
                g = null != o && s(o),
                f = o?.recurrence_rule != null && !a,
                m = (0, D.nh)(n, e);
            if (!g || (u && !f && !a) || (a && !a) || null == o || null == m) return null;
            let { startTime: h } = m;
            if (u && a) {
                if (null == h) return null;
                let t = new Date(c?.scheduled_start_time ?? h);
                if (new Date() > t) return null;
            }
            function x(t) {
                (0, F.openModal)((r) =>
                    (0, l.jsx)(B.ConfirmModal, {
                        ...r,
                        title: T.intl.string(T.t.R5bpin),
                        subtitle: T.intl.string(T.t.v2GWNQ),
                        confirmText: f || t ? T.intl.string(T.t["8ZsNv5"]) : T.intl.string(T.t.B9sJLX),
                        cancelText: T.intl.string(T.t.oEAioF),
                        onConfirm: () =>
                            a && !t ? Z.default.deleteRecurrence(i.id, n, e, c) : Z.default.deleteGuildEvent(n, i.id),
                        children:
                            (f || t) &&
                            (0, l.jsx)(H.E, { variant: "text-md/normal", children: T.intl.format(T.t.ZcpcyO, {}) }),
                    }),
                );
            }
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
        })({ guildEventId: o, recurrenceId: g, guild: tn, channel: tt }),
        ts = (function (t) {
            let { guildEventId: n, guild: i, channel: r, recurrenceId: a, isRecurrenceItem: s } = t,
                { canManageGuildEvent: u } = (0, U.nr)(r ?? i),
                o = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(n)),
                c = u(o),
                g = (0, V.A)(),
                f = (0, J.A)(a, o?.id),
                m = (0, D.nh)(n, a);
            if (!c || null == m || null == o) return null;
            let h = null != o.recurrence_rule && !s;
            function x(t) {
                null != o &&
                    ((null == a || t) && !s
                        ? (0, F.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e("925996"),
                                  e.e("166509"),
                                  e.e("103142"),
                                  e.e("782906"),
                                  e.e("476684"),
                                  e.e("773193"),
                                  e.e("315214"),
                                  e.e("612822"),
                                  e.e("88972"),
                                  e.e("695367"),
                                  e.e("121149"),
                                  e.e("793081"),
                                  e.e("322552"),
                                  e.e("408891"),
                                  e.e("837687"),
                                  e.e("858337"),
                                  e.e("159957"),
                                  e.e("728136"),
                                  e.e("820683"),
                                  e.e("897073"),
                                  e.e("216084"),
                                  e.e("480436"),
                                  e.e("409391"),
                                  e.e("810262"),
                                  e.e("756684"),
                                  e.e("970644"),
                                  e.e("752695"),
                                  e.e("464287"),
                                  e.e("853934"),
                                  e.e("670089"),
                                  e.e("870160"),
                                  e.e("469647"),
                                  e.e("454450"),
                                  e.e("560423"),
                              ]).then(e.bind(e, 729398));
                              return (e) => (0, l.jsx)(t, { ...e, guildScheduledEventId: n, guildId: i.id });
                          }, g)
                        : null != a &&
                          (0, F.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e("695367"),
                                  e.e("853934"),
                                  e.e("870160"),
                                  e.e("871387"),
                              ]).then(e.bind(e, 216854));
                              return (n) => (0, l.jsx)(t, { ...n, guildEvent: o, recurrenceId: a });
                          }, g));
            }
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
                                disabled: f?.is_canceled || m.startTime.getTime() < Date.now(),
                            }),
                            (0, l.jsx)(d.Dr, {
                                id: T.intl.string(T.t.BW1Qoh),
                                label: T.intl.string(T.t.BW1Qoh),
                                action: () => x(!0),
                                disabled: new Date(o.scheduled_start_time).getTime() < Date.now(),
                            }),
                        ],
                    }),
            });
        })({ guildEventId: o, guild: tn, channel: tt, recurrenceId: g, isRecurrenceItem: tl }),
        tu = (0, W.A)(o, tn, tt),
        to = (function (t, n, i) {
            let { canManageGuildEvent: r } = (0, U.nr)(i ?? n),
                a = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t), [t]),
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
                                      e.e("166509"),
                                      e.e("725296"),
                                      e.e("2329"),
                                      e.e("858337"),
                                      e.e("970644"),
                                      e.e("69772"),
                                  ]).then(e.bind(e, 914119));
                                  return (n) => (0, l.jsx)(t, { ...n, event: a });
                              });
                      },
                  });
        })(o, tn, tt),
        tc = (function (t, n, e) {
            let i = null != e;
            if (null == (0, b.bG)([p.A], () => p.A.getGuild(n), [n])) return null;
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
        })(o, tn.id, g),
        tg = (function (t, n) {
            let e = N.Q_.useSetting(),
                { tidaWebformEnabled: r } = I.A.useExperiment(
                    { location: "useCopyEventImageLinkItem" },
                    { autoTrackExposure: !1 },
                ),
                a = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(t)),
                s = null != a ? (0, M.A)(a) : null,
                u = "event-image" === n.getAttribute("data-type"),
                o = i.useCallback(() => {
                    null != s && (0, X.C)(s);
                }, [s]);
            return X.p5 && e && r && null != s && u
                ? (0, l.jsx)(d.Dr, {
                      id: "copy-event-image-link",
                      label: T.intl.string(T.t["8xHmxo"]),
                      action: o,
                      icon: C.LinkIcon,
                  })
                : null;
        })(o, tr),
        tf =
            ((n = (0, b.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(o), [o])),
            null == o || null == n
                ? null
                : (0, l.jsx)(d.Dr, {
                      id: "report-event",
                      label: T.intl.string(T.t.IBA5wX),
                      action: function () {
                          if (null != n) return (0, q.uA)(n);
                      },
                      icon: $.FlagIcon,
                      color: "danger",
                  })),
        tm = (0, u.A)({ id: o, label: T.intl.string(T.t.WZwPO4) }),
        tb = (0, u.A)({ id: g, label: T.intl.string(T.t.NZRGQo) }),
        th = (function (t, n, e, i) {
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
                      ? T.intl.formatToPlainString(T.t["2t8L04"], {
                            channelName: (0, x.m1)(e, y.default, v.A),
                            guildName: o.name,
                        })
                      : T.intl.string(T.t.VSgOVg);
            let g = f()(u.scheduled_start_time),
                C = null != u.scheduled_end_time ? f()(u.scheduled_end_time) : g,
                I =
                    null != u.description && "" !== u.description
                        ? A.Ay.unparse(u.description, e?.id ?? S.dJq, !0)
                        : "",
                N = (0, G.Sn)(u.recurrence_rule),
                X = null != N ? (0, _.X7)(N) : null,
                { startTime: M, endTime: Y } = s,
                P = f()(M) ?? g,
                Q = f()(Y ?? M) ?? g;
            function B() {
                if (null == u) return;
                let t = c()();
                t.createEvent({ start: g, end: C, summary: u.name, description: I, location: r, repeating: X }),
                    E.isPlatformEmbedded
                        ? h.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                        : window.open(t.toURL(), "_blank");
            }
            return (0, l.jsxs)(d.Dr, {
                id: T.intl.string(T.t.k5pvjo),
                label: T.intl.string(T.t.k5pvjo),
                action: B,
                children: [
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.JKSLRH),
                        label: T.intl.string(T.t.JKSLRH),
                        action: function () {
                            if (null == u) return;
                            let t = X?.toString(),
                                n = {
                                    text: u.name,
                                    dates: `${g.format(L)}/${C.format(L)}`,
                                    details: I,
                                    action: "TEMPLATE",
                                    location: r,
                                    recur: null != t ? k.exec(t)?.[0] : void 0,
                                },
                                e = `https://calendar.google.com/calendar/render?${(0, m.stringify)(n)}`;
                            window.open(e, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, { id: T.intl.string(T.t.nrBYSe), label: T.intl.string(T.t.nrBYSe), action: B }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.odzaCd),
                        label: T.intl.string(T.t.odzaCd),
                        action: function () {
                            if (null == u) return;
                            let t = { v: 60, title: u.name, st: P.format(L), et: Q.format(L), desc: I, in_loc: r },
                                n = `https://calendar.yahoo.com/?${(0, m.stringify)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                    (0, l.jsx)(d.Dr, {
                        id: T.intl.string(T.t.rQe8EE),
                        label: T.intl.string(T.t.rQe8EE),
                        action: function () {
                            if (null == u) return;
                            let t = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: P.format(R),
                                    enddt: Q.format(R),
                                    subject: u.name,
                                    body: I,
                                    location: r,
                                    allday: !1,
                                },
                                n = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, m.stringify)(t)}`;
                            window.open(n, "_blank");
                        },
                    }),
                ],
            });
        })(o, tn.id, tt, g),
        tx = (function (t) {
            let { guildEventId: n, guildId: e, recurrenceId: i } = t,
                r = (0, b.bG)([K.A], () => K.A.isLurking(e), [e]),
                a = (0, b.bG)([z.default], () => z.default.getId()),
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
                c = (0, J.A)(i, n);
            if (r || c?.is_canceled) return null;
            function g() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    l = u?.response === w.Qi.INTERESTED ? w.Qi.UNINTERESTED : w.Qi.INTERESTED,
                    r = t ? null : i;
                Z.default.updateRsvp(n, r, e, l);
            }
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
        })({ guildEventId: o, guildId: tn.id, recurrenceId: g });
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
                (0, l.jsxs)(d.rX, { children: [th, !tl && to, ts, !tl && tu, ta, td, tc, tl && tx] }),
                !tl && (0, l.jsx)(d.rX, { children: tf }),
                null != tg && (0, l.jsx)(d.rX, { children: tg }),
                (0, l.jsxs)(d.rX, { children: [tm, tb] }),
            ],
        }),
    });
}
