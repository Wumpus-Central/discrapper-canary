n.d(t, { U: () => f });
var r = n(200651),
    l = n(192379),
    i = n(399606),
    o = n(481060),
    a = n(592125),
    s = n(922482),
    u = n(750154),
    c = n(427679),
    d = n(388032);
function h(e) {
    var t, n;
    let { activity: h } = e,
        { channelId: f } = null != (t = (0, u.rq)(h)) ? t : {},
        p = (0, i.e7)([c.Z], () => c.Z.getStageInstanceByChannel(f), [f]),
        g = l.useRef(null),
        y = l.useCallback(() => {
            let e = a.Z.getChannel(f);
            null != e && s.Cq(e);
        }, [f]),
        O = null != (n = null == p ? void 0 : p.topic) ? n : h.name,
        b = d.intl.formatToPlainString(d.t['T+DNAA'], { channel: O });
    return (0, r.jsx)('div', {
        ref: g,
        children: (0, r.jsx)(o.P3F, {
            onClick: y,
            focusProps: { ringTarget: g },
            children: (0, r.jsx)(o.X6q, {
                variant: 'heading-sm/semibold',
                children: b
            })
        })
    });
}
class f {
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
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (this[e] = h);
    }
}
