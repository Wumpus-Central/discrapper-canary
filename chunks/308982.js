n.d(t, {
    E1: () => u,
    iD: () => d,
    kg: () => s,
}),
    n(539854);
var r = n(392711),
    a = n(15753),
    i = n(51835),
    l = n(561678);
function o() {
    return {
        pickedMemberIds: [],
        currentMemberId: null,
        prompt: "",
        timerDuration: null,
        shuffledOrder: null,
        animation: {
            animatingMemberId: null,
            previousMemberId: null,
            nextMemberId: null,
        },
    };
}
let c = (e, t) => {
    null == e.channelStates[t] && (e.channelStates[t] = o());
};
function u(e, t) {
    return s((n) => {
        var r;
        let a = null != (r = n.channelStates[e]) ? r : o();
        return null != t ? t(a) : a;
    }, r.isEqual);
}
let s = (0, i.F)()(
    (0, a.n)((e) => ({
        channelStates: {},
        pickName: (t, n) => {
            e((e) => {
                c(e, t), e.channelStates[t].pickedMemberIds.push(n), (e.channelStates[t].currentMemberId = n);
            });
        },
        reset: (t) => {
            e((e) => {
                c(e, t),
                    (e.channelStates[t].pickedMemberIds = []),
                    (e.channelStates[t].currentMemberId = null),
                    (e.channelStates[t].shuffledOrder = null),
                    (e.channelStates[t].animation = {
                        animatingMemberId: null,
                        previousMemberId: null,
                        nextMemberId: null,
                    });
            });
        },
        setAnimationState: (t, n) => {
            e((e) => {
                c(e, t), (e.channelStates[t].animation = n);
            });
        },
        setPrompt: (t, n) => {
            e((e) => {
                c(e, t), (e.channelStates[t].prompt = n);
            });
        },
        setTimerDuration: (t, n) => {
            e((e) => {
                c(e, t), (e.channelStates[t].timerDuration = n);
            });
        },
        setShuffledOrder: (t, n) => {
            e((e) => {
                c(e, t), (e.channelStates[t].shuffledOrder = n);
            });
        },
    })),
);
function d(e, t) {
    var n;
    let r = null == (n = s.getState().channelStates[e]) ? void 0 : n.animation;
    return t === (null == r ? void 0 : r.animatingMemberId)
        ? l.U.ANIMATING
        : t === (null == r ? void 0 : r.previousMemberId)
          ? l.U.PREVIOUS
          : t === (null == r ? void 0 : r.nextMemberId)
            ? l.U.NEXT
            : null;
}
