n.d(t, {
    HQ: () => u,
    Ii: () => c,
    OL: () => g,
    Yf: () => p,
    wO: () => d,
}),
    n(388685);
var r = n(473749),
    i = n(17163),
    l = n(642007),
    s = n(313426);
let o = "FRIEND_USER",
    a = "FRIEND_GROUP";
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = r.useMemo(
            () => ({
                userId: e,
                sourceGroupId: t,
            }),
            [e, t],
        ),
        [{ isDragging: s }, a] = (0, i.c)({
            type: o,
            item: l,
            canDrag: () => !n,
            collect: (e) => ({ isDragging: e.isDragging() }),
            options: { dropEffect: "move" },
        });
    return {
        isDragging: s,
        drag: a,
    };
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [{ isOver: n, canDrop: r }, i] = (0, l.L)({
            accept: o,
            canDrop: () => !t,
            drop: (t) => {
                let { userId: n, sourceGroupId: r } = t;
                r !== e && (null != r && s.Z.removeUsersFromGroup(r, n), s.Z.addUsersToGroup(e, n));
            },
            collect: (e) => ({
                isOver: e.isOver(),
                canDrop: e.canDrop(),
            }),
        });
    return {
        isOver: n && r,
        drop: i,
    };
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [{ isOver: t, canDrop: n }, r] = (0, l.L)({
            accept: o,
            canDrop: () => !e,
            drop: (e) => {
                let { userId: t, sourceGroupId: n } = e;
                null != n && s.Z.removeUsersFromGroup(n, t);
            },
            collect: (e) => ({
                isOver: e.isOver(),
                canDrop: e.canDrop(),
            }),
        });
    return {
        isOver: t && n,
        drop: r,
    };
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r.useRef(null),
        [{ isOver: a, canDrop: u }, c] = (0, l.L)({
            accept: o,
            canDrop: () => !n,
            hover: (n, r) => {
                if (r.isOver({ shallow: !0 }) && null != i.current && n.userId !== t && n.sourceGroupId === e) return;
            },
            drop: (n) => {
                let { userId: r, sourceGroupId: i } = n;
                r !== t && i !== e && (null != i && s.Z.removeUsersFromGroup(i, r), s.Z.addUsersToGroup(e, r));
            },
            collect: (n) => {
                let r = n.getItem(),
                    i = n.isOver({ shallow: !0 }),
                    l = n.canDrop();
                return {
                    isOver: i && l && null != r && r.userId !== t && r.sourceGroupId !== e,
                    canDrop: l,
                };
            },
        });
    return {
        isOver: a && u,
        drop: (e) => ((i.current = e), c(e)),
    };
}
function g(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = r.useMemo(
            () => ({
                groupId: e,
                position: t,
            }),
            [e, t],
        ),
        [{ isDragging: u }, c] = (0, i.c)({
            type: a,
            item: o,
            canDrag: () => !s,
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        [{ dragSourcePosition: d }, p] = (0, l.L)({
            accept: a,
            canDrop: () => !s,
            hover: (e, n) => {
                if (n.isOver({ shallow: !0 })) e.position !== t && (e.position = t);
            },
            drop: (t) => {
                n([t.groupId, e]);
            },
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver({ shallow: !0 })
                    ? { dragSourcePosition: t.position }
                    : { dragSourcePosition: null };
            },
        });
    return {
        isDragging: u,
        dragSourcePosition: d,
        drag: c,
        drop: p,
    };
}
