n.d(t, { U: () => h });
var r = n(255367),
    l = n(73800),
    i = n(399606),
    o = n(481060),
    a = n(592125),
    s = n(922482),
    c = n(750154),
    u = n(427679),
    d = n(388032);
function f(e) {
    var t, n;
    let { activity: f } = e,
        { channelId: h } = null != (t = (0, c.rq)(f)) ? t : {},
        p = (0, i.e7)([u.Z], () => u.Z.getStageInstanceByChannel(h), [h]),
        g = l.useRef(null),
        O = l.useCallback(() => {
            let e = a.Z.getChannel(h);
            null != e && s.Cq(e);
        }, [h]),
        y = null != (n = null == p ? void 0 : p.topic) ? n : f.name,
        b = d.intl.formatToPlainString(d.t['T+DNAA'], { channel: y });
    return (0, r.jsx)('div', {
        ref: g,
        children: (0, r.jsx)(o.P3F, {
            onClick: O,
            focusProps: { ringTarget: g },
            children: (0, r.jsx)(o.X6q, {
                variant: 'heading-sm/semibold',
                children: b
            })
        })
    });
}
class h {
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
