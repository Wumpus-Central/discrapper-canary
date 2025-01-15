n.d(t, {
    U: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(481060),
    o = n(592125),
    s = n(922482),
    c = n(750154),
    u = n(427679),
    d = n(388032);
function h(e) {
    var t, n;
    let { activity: h } = e,
        { channelId: p } = null !== (t = (0, c.rq)(h)) && void 0 !== t ? t : {},
        m = (0, r.e7)([u.Z], () => u.Z.getStageInstanceByChannel(p), [p]),
        f = l.useRef(null),
        g = l.useCallback(() => {
            let e = o.Z.getChannel(p);
            null != e && s.Cq(e);
        }, [p]),
        v = null !== (n = null == m ? void 0 : m.topic) && void 0 !== n ? n : h.name,
        C = d.intl.formatToPlainString(d.t['T+DNAA'], { channel: v });
    return (0, i.jsx)('div', {
        ref: f,
        children: (0, i.jsx)(a.Clickable, {
            onClick: g,
            focusProps: { ringTarget: f },
            children: (0, i.jsx)(a.Heading, {
                variant: 'heading-sm/semibold',
                children: C
            })
        })
    });
}
class p {
    shouldShow(e) {
        return (0, c.JE)(e);
    }
    createHeader(e) {
        return {
            subtitle: d.intl.string(d.t['+AJFJy']),
            icon: null
        };
    }
    constructor() {
        var e, t, n;
        (e = this),
            (t = 'body'),
            (n = h),
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
}
