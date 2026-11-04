var i = n(536637),
    r = n.n(i),
    a = n(855986),
    s = n(273185),
    l = n(46653),
    o = n(927813),
    d = n(811091),
    c = n(739010),
    u = n(239093),
    _ = n(652215),
    E = n(792996);
let A = 182 * o.A.Millis.DAY;
n.d(
    t,
    {},
    {
        $r: function (e) {
            if (e.actions.some((e) => e.action_type === c.X2.BAN)) return null;
            let t = e.max_expiration_time;
            if (null == t || !0 === e.has_indefinite_suspension) return null;
            try {
                return new Date(t);
            } catch {
                return null;
            }
        },
        Jn: function (e) {
            return e.type !== c.Xo.MESSAGE || ("" === e.content && 0 === e.attachments.length);
        },
        Q7: function (e) {
            return (0, s.u)(e.filename) || (0, s.AE)(e.filename) ? _.sbO.IS_SPOILER : 0;
        },
        Tk: function (e) {
            return e === _.t02.DSA_APPEAL_REQUEST_DEFLECTION ? E.intl.string(E.t["0qyXXH"]) : E.intl.string(E.t.aPmsx3);
        },
        W$: function () {
            return null != (0, a.bG)([l.default], () => l.default.getSuspendedUserToken());
        },
        _W: function (e) {
            return r()().to(r()(e));
        },
        _g: function (e) {
            return null != e && null != e.guild_metadata;
        },
        eu: function (e) {
            return null == e || 0 === e.length
                ? ""
                : 1 === e.length
                  ? e.toUpperCase()
                  : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
        },
        f4: function (e) {
            if (null == e.fields) return;
            let t = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
            return {
                header: t[u.g0.HEADER] ?? "",
                icon: t[u.g0.ICON_TYPE],
                body: t[u.g0.BODY] ?? "",
                ctas: (t[u.g0.CTAS] ?? "").split(",").filter((e) => "" !== e),
                timestamp: parseFloat(t[u.g0.TIMESTAMP] ?? 0),
                theme: t[u.g0.THEME],
                learn_more_link: t[u.g0.LEARN_MORE_LINK],
                classification_id: t[u.g0.CLASSIFICATION_ID],
            };
        },
        l0: function (e) {
            return {
                [u.Iv.DIDNT_VIOLATE_POLICY]: E.intl.string(E.t.mZffAi),
                [u.Iv.TOO_STRICT_UNFAIR]: E.intl.string(E.t.wgZVAn),
                [u.Iv.DONT_AGREE_PENALTY]: E.intl.string(E.t.eu8G4k),
                [u.Iv.SOMETHING_ELSE]: E.intl.string(E.t.XU3s6r),
            }[e];
        },
        lr: function (e) {
            return d.default.age(e) > A;
        },
        qn: function () {
            return null != l.default.getSuspendedUserToken();
        },
    },
);
