n.d(t, { Z: () => s });
var r = n(570140),
    i = n(467442),
    a = n(869031),
    o = n(987562);
let s = {
    maybeOpenBlockUserFeedback(e) {
        let { location: t } = e;
        (0, a.nZ)(t) && r.Z.dispatch({ type: 'BLOCK_USER_SHOW_FEEDBACK' });
    },
    maybeOpenAgeVerificationUserFeedback(e) {
        let { location: t, visibleContent: n } = e;
        (0, i.pZ)(t) &&
            null != n &&
            o.os.includes(n) &&
            r.Z.dispatch({
                type: 'AGE_VERIFICATION_SHOW_FEEDBACK',
                dismissibleContent: n
            });
    }
};
