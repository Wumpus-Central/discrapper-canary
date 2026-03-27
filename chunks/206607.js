"use strict";
n.d(t, { h5: () => s, jU: () => i, lA: () => r });
var r = (function (e) {
        return (
            (e[(e.INITIALIZE = 0)] = "INITIALIZE"),
            (e[(e.RTC_TRANSFORM = 1)] = "RTC_TRANSFORM"),
            (e[(e.SET_KEY_RATCHET = 2)] = "SET_KEY_RATCHET"),
            (e[(e.UPDATE_SSRC = 3)] = "UPDATE_SSRC"),
            (e[(e.UPDATE_CODECS = 4)] = "UPDATE_CODECS"),
            (e[(e.DESTROY_USER = 5)] = "DESTROY_USER"),
            e
        );
    })({}),
    i = (function (e) {
        return (e[(e.ENCRYPT = 0)] = "ENCRYPT"), (e[(e.DECRYPT = 1)] = "DECRYPT"), e;
    })({}),
    s = (function (e) {
        return (e[(e.PROTOCOL_VERSION_CHANGED = 0)] = "PROTOCOL_VERSION_CHANGED"), e;
    })({});
