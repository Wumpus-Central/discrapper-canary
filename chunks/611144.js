r.d(n, {
    Z: function () {
        return E;
    },
    s: function () {
        return i;
    }
});
var i,
    a = r(536895);
function o(e, n) {
    return Number.isNaN(e) ? n : Number.isNaN(n) ? e : Math.max(e, n);
}
function s(e, n) {
    return Number.isNaN(e) ? n : Number.isNaN(n) ? e : Math.min(e, n);
}
function l(e, n) {
    let { columnCounts: r } = n,
        i = s(o(0, r.length - 1), e.focusedY);
    return {
        ...e,
        columnCounts: r,
        focusedX: s(null == r[i] ? 0 : r[i] - 1, e.focusedX),
        focusedY: i
    };
}
function u(e, n) {
    let { x: r, y: i } = n,
        a = o(0, s(i, e.columnCounts.length - 1));
    return {
        ...e,
        focusedX: o(0, s(r, e.columnCounts[a] - 1)),
        focusedY: a
    };
}
function c(e, n) {
    let r = o(0, e.focusedY - 1);
    return {
        ...e,
        focusedX: s(e.columnCounts[r] - 1, e.focusedX),
        focusedY: r
    };
}
function d(e, n) {
    let r = s(e.focusedY + 1, e.columnCounts.length - 1);
    return {
        ...e,
        focusedX: s(e.columnCounts[r] - 1, e.focusedX),
        focusedY: r
    };
}
function f(e, n) {
    let r = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY],
        i = r ? 0 : s(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
        a = r ? e.focusedY + 1 : e.focusedY;
    return {
        ...e,
        focusedX: i,
        focusedY: a
    };
}
function p(e, n) {
    let r = 0 !== e.focusedY && 0 === e.focusedX,
        i = r ? e.focusedY - 1 : e.focusedY,
        a = r ? e.columnCounts[i] - 1 : o(0, e.focusedX - 1);
    return {
        ...e,
        focusedX: a,
        focusedY: i
    };
}
function h(e, n) {
    return {
        ...e,
        focusedX: 0
    };
}
function _(e, n) {
    return {
        ...e,
        focusedX: e.columnCounts[e.focusedY] - 1
    };
}
function m(e, n) {
    return {
        ...e,
        focusedX: 0,
        focusedY: 0
    };
}
function g(e, n) {
    let r = e.columnCounts.length - 1;
    return {
        ...e,
        focusedX: e.columnCounts[r] - 1,
        focusedY: r
    };
}
function E(e, n) {
    switch (n.type) {
        case a.Us.NAVIGATE_UP:
            return c(e, n);
        case a.Us.NAVIGATE_DOWN:
            return d(e, n);
        case a.Us.NAVIGATE_RIGHT:
            return f(e, n);
        case a.Us.NAVIGATE_LEFT:
            return p(e, n);
        case a.Us.NAVIGATE_INLINE_START:
            return h(e, n);
        case a.Us.NAVIGATE_INLINE_END:
            return _(e, n);
        case a.Us.NAVIGATE_START:
            return m(e, n);
        case a.Us.NAVIGATE_END:
            return g(e, n);
        case 'UPDATE_COLUMN_COUNTS':
            return l(e, n);
        case 'SET_FOCUSED_POSITION':
            return u(e, n);
        case a.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Grid navigator was given an unhandled action '.concat(n.type));
    }
    return e;
}
!(function (e) {
    (e.UPDATE_COLUMN_COUNTS = 'UPDATE_COLUMN_COUNTS'), (e.SET_FOCUSED_POSITION = 'SET_FOCUSED_POSITION');
})(i || (i = {}));
