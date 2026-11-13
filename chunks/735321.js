n(435558);
var i = n(926675),
    l = n(761915),
    s = n(540185),
    r = n(554146),
    d = n(501592),
    u = n(826673),
    g = n(454908),
    a = n(287809),
    o = n(646976),
    _ = n(289173),
    c = n(210598),
    E = n(851767),
    p = n(958805),
    f = n(61881),
    m = n(229231),
    h = n(49999);
n(600253);
var I = n(792996);
function A(e) {
    return e in i.u ? i.u[e] : 0;
}
function T() {
    let e = a.default.getCurrentUser(),
        t = null != e ? E.A.getUserProfile(e.id) : null;
    return t?.widgets ?? [];
}
function y() {
    return f.A.hasPendingChanges() ? (f.A.getPendingWidgets() ?? []) : T();
}
function S(e) {
    return (
        y()
            .filter(_.fu)
            .find((t) => t.type === e) ?? null
    );
}
function G(e) {
    let t = y(),
        n = t.findIndex((t) => t.getUniqueKey() === e.getUniqueKey());
    if (-1 === n) return [e, ...t];
    {
        let i = [...t];
        return ((i[n] = e), i);
    }
}
function P() {
    return y().find((e) => e instanceof o.kM) ?? null;
}
function O(e, t) {
    if (t.length > 20) return;
    let n = P();
    if (null == n) return;
    let i = new o.kM({
        id: n.id,
        clips: n.clips.map((n) => (n.id === e ? { ...n, tags: t.length > 0 ? t : void 0 } : n)),
    });
    p.A.setPendingWidgets(G(i));
}
function R(e, t, n) {
    let i = Object.values(l.X).length;
    if (n.length > i) return;
    let s = S(e);
    if (null == s) return;
    let r = s.games.find((e) => e.gameId === t);
    if (null == r) return;
    let d = { ...r, tags: n },
        u = s.games.map((e) => (e.gameId === t ? d : e)),
        g = G(new _.Yy({ ...s, games: u }));
    p.A.setPendingWidgets(g);
}
n.d(
    t,
    {},
    {
        $6: O,
        $C: function (e) {
            let t = P(),
                n = t?.clips ?? [];
            if (n.length >= 4 || n.some((t) => "uploading" === t.status && t.localClipId === e.localClipId)) return !1;
            let i = new o.kM({ id: t?.id, clips: [...n, e] });
            return (p.A.setPendingWidgets(G(i)), !0);
        },
        AD: function (e) {
            let t = G(e(y().find((e) => e instanceof c.Tu) ?? null ?? (0, c.g0)()));
            p.A.setPendingWidgets(t);
        },
        BF: T,
        FM: function (e, t) {
            let { showEditingControls: n } = t,
                l = e.games.length > 0;
            if (n && l)
                return 1 === i.u[e.type]
                    ? I.intl.string(I.t.wiXdEa)
                    : I.intl.format(I.t["zR1+0/"], { numGames: i.u[e.type] });
        },
        Fo: function (e, t) {
            let n = P();
            if (null == n) return;
            let i = n.clips.find((t) => t.id === e);
            i?.tags != null &&
                0 !== i.tags.length &&
                O(
                    e,
                    i.tags.filter((e) => e !== t),
                );
        },
        L: function (e) {
            return m.Ok[e.type](e);
        },
        N5: function (e, t) {
            let n = P();
            if (null == n || e === t) return;
            let i = [...n.clips];
            if (e < 0 || e >= i.length || t < 0 || t >= i.length) return;
            let [l] = i.splice(e, 1);
            i.splice(t, 0, l);
            let s = new o.kM({ id: n.id, clips: i });
            p.A.setPendingWidgets(G(s));
        },
        QN: function (e, t) {
            let n = P(),
                i = n?.clips.find((t) => t.id === e);
            if (null == n || null == i || "saved" === i.status) return;
            let l = new o.kM({ id: n.id, clips: n.clips.map((e) => (e === i ? { ...i, thumbnail: t } : e)) });
            p.A.setPendingWidgets(G(l));
        },
        R_: function (e, t) {
            if (e === t) return;
            let n = y();
            if (e < 0 || e >= n.length || t < 0 || t >= n.length) return;
            let i = [...n],
                [l] = i.splice(e, 1);
            (i.splice(t, 0, l), p.A.setPendingWidgets(i));
        },
        Un: function (e, t, n) {
            let i = S(e);
            if (null == i || null == i.games || t === n) return;
            let l = [...i.games];
            if (t < 0 || t >= l.length || n < 0 || n >= l.length) return;
            let [s] = l.splice(t, 1);
            l.splice(n, 0, s);
            let r = G(new _.Yy({ ...i, games: l }));
            p.A.setPendingWidgets(r);
        },
        WX: function (e, t) {
            let n = P(),
                i = n?.clips.find((t) => t.id === e);
            if (null == n || i?.status !== "uploading") return !1;
            let l = new o.kM({
                id: n.id,
                clips: n.clips.map((e) => (e === i ? { ...i, status: "pending", uploadFilename: t } : e)),
            });
            return (p.A.setPendingWidgets(G(l)), !0);
        },
        XX: function (e) {
            return !(0, d.K)(e.contentClassification) && !i.Z.has(e.id);
        },
        Y5: function (e) {
            let t = y();
            null == t.find((t) => t.getUniqueKey() === e.getUniqueKey()) &&
                (e.type === s.x.PERSONAL &&
                    ((0, u.Dr)(r.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, { dismissAction: h.i.INDIRECT_ACTION }),
                    (0, u.Dr)(r.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: h.i.INDIRECT_ACTION })),
                p.A.setPendingWidgets([e, ...t]));
        },
        cv: A,
        ef: function (e, t) {
            let n = S(e);
            if (null == n) return;
            let i = (null != n.games ? n.games : []).filter((e) => e.gameId !== t),
                l = G(new _.Yy({ ...n, games: i }));
            p.A.setPendingWidgets(l);
        },
        ew: function (e) {
            let t,
                { widgetType: n, game: i, ignoreMaxGames: l = !1 } = e,
                s = S(n),
                r = A(n);
            if (null != s) {
                let e = s.games?.length ?? 0;
                if ((!l && e >= r) || (s.games ?? []).some((e) => e.gameId === i.gameId)) return !1;
            }
            let d = { gameId: i.gameId, comment: i.comment, tags: i.tags };
            t = null != s ? [d, ...(s.games ?? [])] : [d];
            let u = G(new _.Yy({ ...(s ?? { type: n }), games: t }));
            return (p.A.setPendingWidgets(u), g.I.fetchMany([i.gameId]), !0);
        },
        iu: function (e) {
            return P()?.clips.some((t) => t.id === e && "uploading" === t.status) ?? !1;
        },
        mC: function (e) {
            let t = P();
            if (null == t || !t.clips.some((t) => t.id === e)) return;
            let n = new o.kM({ id: t.id, clips: t.clips.filter((t) => t.id !== e) });
            p.A.setPendingWidgets(G(n));
        },
        mI: function (e, t) {
            let n = P();
            if (null == n) return;
            let i = t.trim(),
                l = new o.kM({
                    id: n.id,
                    clips: n.clips.map((t) => (t.id === e ? { ...t, title: "" === i ? void 0 : i } : t)),
                });
            p.A.setPendingWidgets(G(l));
        },
        oc: function (e, t, n) {
            let i = S(e);
            if (null == i) return;
            let l = i.games.find((e) => e.gameId === t);
            if (null == l || n === l.comment) return;
            let s = { ...l, comment: n },
                r = i.games.map((e) => (e.gameId === t ? s : e)),
                d = G(new _.Yy({ ...i, games: r }));
            p.A.setPendingWidgets(d);
        },
        qA: function (e) {
            let t = y().filter((t) => t.getUniqueKey() !== e.getUniqueKey());
            p.A.setPendingWidgets(t);
        },
        s1: R,
        tg: function (e, t, n) {
            let i = S(e);
            if (null == i) return;
            let l = i.games.find((e) => e.gameId === t);
            if (null == l || null == l.tags || 0 === l.tags.length) return;
            let s = l.tags.filter((e) => e !== n);
            R(i.type, t, s.length > 0 ? s : []);
        },
        uA: function (e) {
            let t = A(e.type);
            return e.games.length >= t;
        },
    },
);
