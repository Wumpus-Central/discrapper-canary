i.d(t, { A: () => F });
var l = i(627968),
    n = i(64700),
    s = i(17928),
    a = i(661531),
    r = i(834730),
    d = i(97808),
    c = i(778712),
    u = i(983851),
    o = i(364522);
i(321073);
var m = i(735438),
    h = i.n(m),
    g = i(451988),
    p = i(627363),
    A = i(587895);
class x {
    _lastFetchedAttempted = new Map();
    _pending = new Set();
    _flushHandler = new g.J_(32, () => this._flush());
    request(e) {
        if (this._pending.has(e)) return;
        let t = this._lastFetchedAttempted.get(e);
        (null != t && Date.now() - t < 6e4) || (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach((t) => {
            this._lastFetchedAttempted.set(t, Date.now()), e.push(t);
        }),
            this._pending.clear();
        let t = [],
            i = [];
        e.forEach((e) => {
            A.A.didFetchingApplicationFail(e) ? i.push(e) : t.push(e);
        }),
            t.length > 0 &&
                h()
                    .chunk(t, 20)
                    .forEach((e) => {
                        p.Ay.fetchApplications(e, !1);
                    }),
            i.length > 0 &&
                h()
                    .chunk(i, 20)
                    .forEach((e) => {
                        p.Ay.fetchApplications(e, !0);
                    });
    }
}
let v = new x();
var I = i(47167),
    f = i(475889),
    N = i(291594),
    E = i(85451),
    _ = i(137177),
    j = i(409626),
    S = i(692969),
    y = i(290987),
    C = i(975732),
    b = i(820512),
    T = i(769022),
    k = i(898926),
    O = i(287809),
    G = i(954571),
    P = i(562153),
    V = i(652215),
    w = i(985018),
    R = i(672680);
function U(e) {
    var t, i;
    let { event: a, guildId: d, channelId: c } = e,
        u = (0, s.bG)([O.default], () => O.default.getUser(a.userId)),
        o =
            ((i = t = a.applicationId ?? null),
            n.useEffect(() => {
                null != i && "" !== i && v.request(i);
            }, [i]),
            (0, s.bG)([A.A], () => (null != t && "" !== t ? A.A.getApplication(t) : null), [t])),
        m = P.Ay.useName(d, c, u),
        h = (0, S.A)({
            location: "VoiceChannelHistory",
            applicationId: a.applicationId ?? void 0,
            source: j.Ob.ActivityCard,
        });
    return null == u
        ? null
        : (0, l.jsxs)("li", {
              className: R.NG,
              children: [
                  (0, l.jsx)("div", { className: R.Wz }),
                  (0, l.jsx)("div", {
                      className: R.xW,
                      children: (0, l.jsx)(_.A, { game: o, className: R.AW, "aria-hidden": !0 }),
                  }),
                  (0, l.jsxs)("div", {
                      className: R.Kw,
                      children: [
                          (0, l.jsx)(r.E, {
                              variant: "text-sm/normal",
                              className: R.rN,
                              children: w.intl.format(w.t.CKIMrx, {
                                  user: (0, l.jsx)(N.A, {
                                      tag: "span",
                                      onClick: () =>
                                          (0, C.openUserProfileModal)({ userId: a.userId, guildId: d, channelId: c }),
                                      children: (0, l.jsx)(r.E, {
                                          variant: "text-sm/semibold",
                                          tag: "span",
                                          children: m,
                                      }),
                                  }),
                                  activityName:
                                      null != h && null != o
                                          ? (0, l.jsx)(N.A, {
                                                tag: "span",
                                                onClick: h,
                                                children: (0, l.jsx)(r.E, {
                                                    variant: "text-sm/semibold",
                                                    tag: "span",
                                                    children: o.name,
                                                }),
                                            })
                                          : (0, l.jsx)(r.E, {
                                                variant: "text-sm/semibold",
                                                tag: "span",
                                                children: o?.name ?? w.intl.string(w.t.GIWFlF),
                                            }),
                              }),
                          }),
                          (0, l.jsx)(r.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: R.gE,
                              children: (0, l.jsx)(y.Ay, {
                                  end: a.timestamp,
                                  location: y.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function D(e) {
    let { event: t, guildId: i, channelId: n } = e,
        a = (0, s.bG)([O.default], () => O.default.getUser(t.userId)),
        u = P.Ay.useName(i, n, a);
    return null == a
        ? null
        : (0, l.jsxs)("li", {
              className: R.NG,
              children: [
                  (0, l.jsx)("div", { className: R.Wz }),
                  (0, l.jsx)("div", {
                      className: R.xW,
                      children: (0, l.jsx)(d.eu, { src: a.getAvatarURL(i, 20), size: c._3.SIZE_20, "aria-hidden": !0 }),
                  }),
                  (0, l.jsxs)("div", {
                      className: R.Kw,
                      children: [
                          (0, l.jsx)(r.E, {
                              variant: "text-sm/normal",
                              className: R.qJ,
                              children: w.intl.format(w.t.TlVwqn, {
                                  user: u,
                                  userHook: (e, s) =>
                                      (0, l.jsx)(
                                          N.A,
                                          {
                                              tag: "span",
                                              className: R.C3,
                                              onClick: () =>
                                                  (0, C.openUserProfileModal)({
                                                      userId: t.userId,
                                                      guildId: i,
                                                      channelId: n,
                                                  }),
                                              children: (0, l.jsx)(r.E, {
                                                  variant: "text-sm/semibold",
                                                  tag: "span",
                                                  children: e,
                                              }),
                                          },
                                          s,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, l.jsx)(r.E, { variant: "text-sm/normal", className: R.CS, children: e }, t),
                              }),
                          }),
                          (0, l.jsx)(r.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: R.gE,
                              children: (0, l.jsx)(y.Ay, {
                                  end: t.timestamp,
                                  location: y.Ay.Locations.VOICE_CHANNEL_HISTORY,
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function M(e) {
    let { event: t, guildId: i, channelId: n } = e;
    return t.eventType === k.i.ACTIVITY_ENDED
        ? (0, l.jsx)(U, { event: t, guildId: i, channelId: n })
        : t.eventType === k.i.USER_LEFT
          ? (0, l.jsx)(D, { event: t, guildId: i, channelId: n })
          : null;
}
function L(e) {
    let { channel: t } = e,
        i = (0, f.H)(t),
        n = (0, I.Ay)(t);
    return (0, l.jsxs)("div", {
        className: R.hY,
        children: [
            (0, l.jsx)(u.H, { size: "custom", color: a.A.colors.ICON_FEEDBACK_POSITIVE, height: 20, width: 20 }),
            (0, l.jsx)(r.E, { variant: "text-md/medium", className: R.HA, children: n }),
            null != i && (0, l.jsx)(E.z, { textColor: "text-feedback-positive", entry: { start: i } }),
        ],
    });
}
function F(e) {
    let { channel: t, source: i, onMouseEnter: a, onMouseLeave: d } = e;
    n.useEffect(() => {
        (0, b.q)(t.id);
    }, [t.id]);
    let c = (0, s.bG)([T.A], () => T.A.getHistory(t.id), [t.id]),
        u = c.length > 0;
    return (n.useEffect(() => {
        u && G.default.track(V.HAw.OPEN_POPOUT, { type: "Voice Channel History", channel_id: t.id, source: i });
    }, [u, t.id, i]),
    u)
        ? (0, l.jsxs)("div", {
              role: "dialog",
              "aria-label": w.intl.string(w.t.N0ED9s),
              className: R.kL,
              onMouseEnter: a,
              onMouseLeave: d,
              children: [
                  "voice_channel" === i ? (0, l.jsx)(L, { channel: t }) : null,
                  (0, l.jsx)(o.Ip, {
                      children: (0, l.jsxs)("div", {
                          className: R.PI,
                          children: [
                              (0, l.jsx)("div", {
                                  className: R.s8,
                                  children: (0, l.jsx)(r.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: w.intl.string(w.t.N0ED9s),
                                  }),
                              }),
                              (0, l.jsx)("ol", {
                                  className: R.Gz,
                                  children: c.map((e) =>
                                      (0, l.jsx)(M, { event: e, guildId: t.guild_id, channelId: t.id }, e.key),
                                  ),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
