n.d(t, {
    Z: () => g,
    s: () => r
});
var i = n(536895),
    r = (function (e) {
        return (e.UPDATE_COLUMN_COUNTS = 'UPDATE_COLUMN_COUNTS'), (e.SET_FOCUSED_POSITION = 'SET_FOCUSED_POSITION'), e;
    })({});
function a(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function s(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function o(e, t) {
    let { columnCounts: n } = t,
        i = s(a(0, n.length - 1), e.focusedY);
    return {
        ...e,
        columnCounts: n,
        focusedX: s(null == n[i] ? 0 : n[i] - 1, e.focusedX),
        focusedY: i
    };
}
function l(e, t) {
    let { x: n, y: i } = t,
        r = a(0, s(i, e.columnCounts.length - 1));
    return {
        ...e,
        focusedX: a(0, s(n, e.columnCounts[r] - 1)),
        focusedY: r
    };
}
function u(e, t) {
    let n = a(0, e.focusedY - 1);
    return {
        ...e,
        focusedX: s(e.columnCounts[n] - 1, e.focusedX),
        focusedY: n
    };
}
function c(e, t) {
    let n = s(e.focusedY + 1, e.columnCounts.length - 1);
    return {
        ...e,
        focusedX: s(e.columnCounts[n] - 1, e.focusedX),
        focusedY: n
    };
}
function d(e, t) {
    let n = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY],
        i = n ? 0 : s(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
        r = n ? e.focusedY + 1 : e.focusedY;
    return {
        ...e,
        focusedX: i,
        focusedY: r
    };
}
function f(e, t) {
    let n = 0 !== e.focusedY && 0 === e.focusedX,
        i = n ? e.focusedY - 1 : e.focusedY,
        r = n ? e.columnCounts[i] - 1 : a(0, e.focusedX - 1);
    return {
        ...e,
        focusedX: r,
        focusedY: i
    };
}
function _(e, t) {
    return {
        ...e,
        focusedX: 0
    };
}
function p(e, t) {
    return {
        ...e,
        focusedX: e.columnCounts[e.focusedY] - 1
    };
}
function h(e, t) {
    return {
        ...e,
        focusedX: 0,
        focusedY: 0
    };
}
function m(e, t) {
    let n = e.columnCounts.length - 1;
    return {
        ...e,
        focusedX: e.columnCounts[n] - 1,
        focusedY: n
    };
}
function g(e, t) {
    switch (t.type) {
        case i.Us.NAVIGATE_UP:
            return u(e, t);
        case i.Us.NAVIGATE_DOWN:
            return c(e, t);
        case i.Us.NAVIGATE_RIGHT:
            return d(e, t);
        case i.Us.NAVIGATE_LEFT:
            return f(e, t);
        case i.Us.NAVIGATE_INLINE_START:
            return _(e, t);
        case i.Us.NAVIGATE_INLINE_END:
            return p(e, t);
        case i.Us.NAVIGATE_START:
            return h(e, t);
        case i.Us.NAVIGATE_END:
            return m(e, t);
        case 'UPDATE_COLUMN_COUNTS':
            return o(e, t);
        case 'SET_FOCUSED_POSITION':
            return l(e, t);
        case i.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Grid navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
