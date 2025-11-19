n.d(t, { Z: () => S }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(692547),
    s = n(481060),
    l = n(475179),
    c = n(519938),
    u = n(317381),
    d = n(812206),
    f = n(358221),
    _ = n(199902),
    p = n(366050),
    h = n(594174),
    m = n(981631),
    g = n(354459),
    E = n(388032),
    b = n(533362);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { closePopout: t, idle: n, pipWindows: i, voiceChannelId: o, onSelect: h } = e;
    n && t();
    let b = (0, a.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
        y = (0, a.e7)([p.Z], () => p.Z.pipWindow),
        O = (0, a.e7)([f.Z], () => f.Z.getSelectedParticipant(o)),
        v = (0, a.e7)([f.Z], () => f.Z.getStreamParticipants(o));
    function I(e) {
        (null == y ? void 0 : y.id) !== e.pipWindow.id && (0, c.k3)(e.pipWindow.id);
        let t = e.participant;
        null != t && t.type !== g.fO.ACTIVITY && l.Z.selectParticipant(o, t.id);
    }
    function T(e) {
        if (e.pipWindow.component === m.NYg.ACTIVITY && null != b) {
            var t;
            let e = null == (t = d.Z.getApplication(b.applicationId)) ? void 0 : t.name;
            return null == e
                ? E.intl.string(E.t["8raC1P"])
                : E.intl.formatToPlainString(E.t["a9+V+V"], { activityName: e });
        }
        return null == e.participant || e.participant.type !== g.fO.STREAM
            ? E.intl.string(E.t["ng/Kwl"])
            : E.intl.formatToPlainString(E.t.sqmFRg, { username: e.participant.userNick });
    }
    function S() {
        let e = [],
            t = i.find((e) => e.component === m.NYg.VIDEO);
        return (
            null != t &&
                v.forEach((n) => {
                    let r = _.Z.getActiveStreamForApplicationStream(n.stream),
                        i = n.id === (null == O ? void 0 : O.id) && (null == y ? void 0 : y.id) === t.id;
                    null == r ||
                        i ||
                        e.push({
                            pipWindow: t,
                            participant: n,
                            stream: r,
                        });
                }),
            e
        );
    }
    function A(e) {
        var t;
        let n = e.pipWindow.id,
            i = null == (t = e.participant) ? void 0 : t.id,
            a = T(e),
            o = "".concat(n).concat(null != i ? i : "");
        return (0, r.jsx)(
            s.sNh,
            {
                id: o,
                label: a,
                action: () => I(e),
            },
            o,
        );
    }
    return (0, r.jsx)(s.v2r, {
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: t,
        onSelect: h,
        children: S().map(A),
    });
}
let S = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        l = i.useRef(null),
        c = Array.from((0, a.e7)([p.Z], () => p.Z.pipWindows).values()).filter((e) => e.component !== m.NYg.ACTIVITY),
        u = (0, a.Wu)([_.Z], () => _.Z.getAllActiveStreamsForChannel(t)).filter((e) => {
            var n;
            return e.ownerId !== (null == (n = h.default.getCurrentUser()) ? void 0 : n.id) && e.channelId === t;
        }),
        d = (1 === c.length && c[0].component === m.NYg.ACTIVITY) || 0 === u.length,
        f = 1 === c.length && u.length <= 1;
    return d || f
        ? null
        : (0, r.jsx)(s.yRy, {
              targetElementRef: l,
              position: "bottom",
              renderPopout: (e) =>
                  (0, r.jsx)(
                      T,
                      O(
                          {
                              voiceChannelId: t,
                              pipWindows: c,
                              idle: n,
                          },
                          e,
                      ),
                  ),
              children: (e) =>
                  (0, r.jsx)(
                      s.P3F,
                      I(O({ className: b.menuIcon }, e), {
                          innerRef: l,
                          children: (0, r.jsx)(s.Huf, {
                              size: "md",
                              color: o.Z.unsafe_rawColors.WHITE_500.css,
                          }),
                      }),
                  ),
          });
};
