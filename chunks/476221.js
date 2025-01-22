var l = n(981631),
    s = n(388032);
t.Z = {
    getStatus: function (e) {
        let t,
            n,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case l.hes.CONNECTING:
                (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.MzW9sL));
                break;
            case l.hes.AUTHENTICATING:
                (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.GxXwEx));
                break;
            case l.hes.AWAITING_ENDPOINT:
                (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.xEbu0d));
                break;
            case l.hes.RTC_CONNECTED:
                (t = l.QKv.CONNECTED), (n = r ? s.intl.string(s.t.HtVOdX) : s.intl.string(s.t['daXg4+']));
                break;
            case l.hes.RTC_CONNECTING:
                (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.Gp51dn));
                break;
            case l.hes.ICE_CHECKING:
                (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.rdCyAw));
                break;
            case l.hes.DTLS_CONNECTING:
                (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.UvB3gY));
                break;
            case l.hes.NO_ROUTE:
                (t = l.QKv.ERROR), (n = s.intl.string(s.t.mGhOIi));
                break;
            case l.hes.RTC_DISCONNECTED:
                (t = l.QKv.ERROR), (n = s.intl.string(s.t.M7LDmJ));
                break;
            case l.hes.DISCONNECTED:
            default:
                (t = l.QKv.ERROR), (n = s.intl.string(s.t.NLKQb2));
        }
        return {
            connectionStatus: t,
            connectionStatusText: n
        };
    },
    getShortHostname: function (e) {
        return null == e ? '' : e.split('.')[0];
    }
};
