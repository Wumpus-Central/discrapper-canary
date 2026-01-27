n.d(t, {
    A: () => S,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(827734),
    s = n(397927),
    l = n(367513),
    c = n(31728),
    u = n(933958),
    d = n(587895),
    f = n(313961),
    p = n(616356),
    _ = n(334463),
    h = n(287809),
    m = n(652215),
    g = n(806931),
    E = n(985018),
    y = n(319567);

function b(e, t, n) {
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
                b(e, t, n[t]);
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

function A(e, t) {
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

function I(e) {
    let { closePopout: t, idle: n, pipWindows: i, voiceChannelId: o, onSelect: h } = e;
    n && t();
    let y = (0, a.bG)([u.Ay], () => u.Ay.getCurrentEmbeddedActivity()),
        b = (0, a.bG)([_.A], () => _.A.pipWindow),
        O = (0, a.bG)([f.A], () => f.A.getSelectedParticipant(o)),
        v = (0, a.bG)([f.A], () => f.A.getStreamParticipants(o));

    function A(e) {
        (null == b ? void 0 : b.id) !== e.pipWindow.id && (0, c.mf)(e.pipWindow.id);
        let t = e.participant;
        null != t && t.type !== g.lp.ACTIVITY && l.A.selectParticipant(o, t.id);
    }

    function I(e) {
        if (e.pipWindow.component === m.o1q.ACTIVITY && null != y) {
            var t;
            let e = null == (t = d.A.getApplication(y.applicationId)) ? void 0 : t.name;
            return null == e
                ? E.intl.string(E.t["8raC1P"])
                : E.intl.formatToPlainString(E.t["a9+V+V"], {
                      activityName: e,
                  });
        }
        return null == e.participant || e.participant.type !== g.lp.STREAM
            ? E.intl.string(E.t["ng/Kwl"])
            : E.intl.formatToPlainString(E.t.sqmFRg, {
                  username: e.participant.userNick,
              });
    }

    function S() {
        let e = [],
            t = i.find((e) => e.component === m.o1q.VIDEO);
        return (
            null != t &&
                v.forEach((n) => {
                    let r = p.A.getActiveStreamForApplicationStream(n.stream),
                        i = n.id === (null == O ? void 0 : O.id) && (null == b ? void 0 : b.id) === t.id;
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

    function T(e) {
        var t;
        let n = e.pipWindow.id,
            i = null == (t = e.participant) ? void 0 : t.id,
            a = I(e),
            o = "".concat(n).concat(null != i ? i : "");
        return (0, r.jsx)(
            s.Drp,
            {
                id: o,
                label: a,
                action: () => A(e),
            },
            o,
        );
    }
    return (0, r.jsx)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: t,
        onSelect: h,
        children: S().map(T),
    });
}
let S = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        l = i.useRef(null),
        c = Array.from((0, a.bG)([_.A], () => _.A.pipWindows).values()).filter((e) => e.component !== m.o1q.ACTIVITY),
        u = (0, a.yK)([p.A], () => p.A.getAllActiveStreamsForChannel(t)).filter((e) => {
            var n;
            return e.ownerId !== (null == (n = h.default.getCurrentUser()) ? void 0 : n.id) && e.channelId === t;
        }),
        d = (1 === c.length && c[0].component === m.o1q.ACTIVITY) || 0 === u.length,
        f = 1 === c.length && u.length <= 1;
    return d || f
        ? null
        : (0, r.jsx)(s.YNO, {
              targetElementRef: l,
              position: "bottom",
              renderPopout: (e) =>
                  (0, r.jsx)(
                      I,
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
                      s.DUT,
                      A(
                          O(
                              {
                                  className: y.ro,
                              },
                              e,
                          ),
                          {
                              innerRef: l,
                              children: (0, r.jsx)(s.FHP, {
                                  size: "md",
                                  color: o.A.unsafe_rawColors.WHITE.css,
                              }),
                          },
                      ),
                  ),
          });
};
