n.d(t, {
    Jn: () => m,
    Tk: () => y,
    UI: () => O,
    W$: () => A,
    _W: () => p,
    _g: () => b,
    eu: () => E,
    f4: () => h,
    l0: () => g,
    qn: () => v,
    tF: () => _,
}),
    n(747238);
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    s = n(77350),
    o = n(961350),
    l = n(739010),
    c = n(239093),
    u = n(652215),
    d = n(381941),
    f = n(985018);

function p(e) {
    return i()().to(i()(e));
}

function _(e) {
    var t, n;
    return (0, s.u)(e.filename) || (0, s.AE)(e.filename)
        ? "".concat(d._W).concat(null != (t = e.filename) ? t : ".png")
        : null != (n = e.filename)
          ? n
          : "";
}

function h(e) {
    var t, n, r, i;
    if (null == e.fields) return;
    let a = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null != (t = a[c.g0.HEADER]) ? t : "",
        icon: a[c.g0.ICON_TYPE],
        body: null != (n = a[c.g0.BODY]) ? n : "",
        ctas: (null != (r = a[c.g0.CTAS]) ? r : "").split(",").filter((e) => "" !== e),
        timestamp: parseFloat(null != (i = a[c.g0.TIMESTAMP]) ? i : 0),
        theme: a[c.g0.THEME],
        learn_more_link: a[c.g0.LEARN_MORE_LINK],
        classification_id: a[c.g0.CLASSIFICATION_ID],
    };
}

function m(e) {
    return e.type !== l.Xo.MESSAGE || ("" === e.content && 0 === e.attachments.length);
}
let g = (e) =>
        ({
            [c.Iv.DIDNT_VIOLATE_POLICY]: f.intl.string(f.t.mZffAi),
            [c.Iv.TOO_STRICT_UNFAIR]: f.intl.string(f.t.wgZVAn),
            [c.Iv.DONT_AGREE_PENALTY]: f.intl.string(f.t.eu8G4k),
            [c.Iv.SOMETHING_ELSE]: f.intl.string(f.t.XU3s6r),
        })[e],
    E = (e) =>
        null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function b(e) {
    return null != e && null != e.guild_metadata;
}
let y = (e) => (e === u.t02.DSA_APPEAL_REQUEST_DEFLECTION ? f.intl.string(f.t["0qyXXH"]) : f.intl.string(f.t.aPmsx3));

function O(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch (e) {
        return null;
    }
}
let A = () => null != (0, a.bG)([o.default], () => o.default.getSuspendedUserToken());

function v() {
    return null != o.default.getSuspendedUserToken();
}
