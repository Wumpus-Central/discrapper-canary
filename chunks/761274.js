var i, a, o, s;
r.d(n, {
    Eu: function () {
        return o;
    },
    NZ: function () {
        return i;
    },
    PQ: function () {
        return a;
    }
}),
    !(function (e) {
        (e.AUTHORIZED = 'authorized'), (e.DENIED = 'denied'), (e.RESTRICTED = 'restricted'), (e.UNDETERMINED = 'undetermined');
    })(i || (i = {})),
    !(function (e) {
        (e.DISMISSED = 'dismissed'), (e.DENIED = 'denied'), (e.ACCEPTED = 'accepted'), (e.NO_DEVICES = 'no_devices'), (e.ERROR = 'error'), (e.NONE = 'none');
    })(a || (a = {})),
    !(function (e) {
        (e.AUDIO = 'audio'), (e.CAMERA = 'camera'), (e.STORAGE = 'storage'), (e.NOTIFICATIONS = 'notifications'), (e.PHOTOS = 'photos'), (e.CONTACTS = 'contacts'), (e.INPUT_MONITORING = 'input_monitoring'), (e.SCREEN_RECORDING = 'screen_recording');
    })(o || (o = {})),
    !(function (e) {
        (e[(e.UNDETERMINED = 0)] = 'UNDETERMINED'), (e[(e.DENIED = 1)] = 'DENIED'), (e[(e.AUTHORIZED = 2)] = 'AUTHORIZED'), (e[(e.PROVISIONAL = 3)] = 'PROVISIONAL'), (e[(e.EPHEMERAL = 4)] = 'EPHEMERAL');
    })(s || (s = {}));
