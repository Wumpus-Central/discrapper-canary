n.d(t, { U: () => h });
var l = n(200651),
    r = n(192379),
    i = n(399606),
    a = n(481060),
    o = n(592125),
    s = n(922482),
    u = n(750154),
    c = n(427679),
    d = n(388032);
function f(e) {
    var t, n;
    let { activity: f } = e,
        { channelId: h } = null != (t = (0, u.rq)(f)) ? t : {},
        g = (0, i.e7)([c.Z], () => c.Z.getStageInstanceByChannel(h), [h]),
        p = r.useRef(null),
        y = r.useCallback(() => {
            let e = o.Z.getChannel(h);
            null != e && s.Cq(e);
        }, [h]),
        O = null != (n = null == g ? void 0 : g.topic) ? n : f.name,
        m = d.intl.formatToPlainString(d.t['T+DNAA'], { channel: O });
    return (0, l.jsx)('div', {
        ref: p,
        children: (0, l.jsx)(a.P3F, {
            onClick: y,
            focusProps: { ringTarget: p },
            children: (0, l.jsx)(a.X6q, {
                variant: 'heading-sm/semibold',
                children: m
            })
        })
    });
}
class h {
    shouldShow(e) {
        return (0, u.JE)(e);
    }
    createHeader(e) {
        return {
            subtitle: d.intl.string(d.t['+AJFJy']),
            icon: null
        };
    }
    constructor() {
        var e;
        (e = 'body') in this
            ? Object.defineProperty(this, e, {
                  value: f,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (this[e] = f);
    }
}
