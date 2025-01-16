n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(653041);
var o,
    i,
    a = n(388032);
function l(e) {
    let t = [
        {
            label: a.intl.string(a.t['UqD/9f']),
            code: 2,
            value: "I couldn't hear audio at all"
        },
        {
            label: a.intl.string(a.t.DVEGuL),
            code: 3,
            value: 'Nobody could hear me'
        },
        {
            label: a.intl.string(a.t['2nWcBw']),
            code: 4,
            value: 'Audio had echos or feedback'
        },
        {
            label: a.intl.string(a.t.K3E4Dw),
            code: 5,
            value: 'Audio was robotic or distorted'
        },
        {
            label: a.intl.string(a.t.Dpm2U1),
            code: 6,
            value: 'Audio cut in and out'
        },
        {
            label: a.intl.string(a.t.kuGsi4),
            code: 7,
            value: 'Volume was too low or high'
        },
        {
            label: a.intl.string(a.t.PkiFCQ),
            code: 8,
            value: 'Background noise was too loud'
        }
    ];
    return (
        e &&
            t.push({
                label: a.intl.string(a.t.hvIDwc),
                code: 9,
                value: 'Issues with speakerphone'
            }),
        t.push(
            {
                label: a.intl.string(a.t['+gUm1t']),
                code: 10,
                value: 'Issues with headset/bluetooth'
            },
            {
                label: a.intl.string(a.t['emlT9/']),
                code: 1,
                value: 'Other'
            }
        ),
        t
    );
}
((i = o || (o = {})).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all"), (i.NOBODY_COULD_HEAR_ME = 'Nobody could hear me'), (i.AUDIO_ECHOS = 'Audio had echos or feedback'), (i.AUDIO_ROBOTIC = 'Audio was robotic or distorted'), (i.AUDIO_CUT = 'Audio cut in and out'), (i.BAD_VOLUME = 'Volume was too low or high'), (i.BACKGROUND_NOISE = 'Background noise was too loud'), (i.SPEAKERPHONE = 'Issues with speakerphone'), (i.HEADSET = 'Issues with headset/bluetooth'), (i.OTHER = 'Other');
