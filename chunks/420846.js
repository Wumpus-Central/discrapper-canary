n.d(t, { Z: () => o });
var r = n(570140),
    i = n(467442),
    a = n(869031);
let o = {
    maybeOpenBlockUserFeedback(e) {
        let { location: t } = e;
        (0, a.nZ)(t) && r.Z.dispatch({ type: 'BLOCK_USER_SHOW_FEEDBACK' });
    },
    maybeOpenAgeVerificationUserFeedback(e) {
        let { location: t, didStartVerification: n } = e;
        (0, i.pZ)(t) &&
            r.Z.dispatch({
                type: 'AGE_VERIFICATION_SHOW_FEEDBACK',
                didStartVerification: n
            });
    }
};
