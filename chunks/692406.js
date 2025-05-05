function n(e, t) {
    return 'string' == typeof (null == t ? void 0 : t.format) ? Object.assign(Object.assign({}, e[t.format]), t) : t;
}
Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.DEFAULT_FORMAT_CONFIG = void 0),
    (t.resolveFormatConfigOptions = n),
    (t.DEFAULT_FORMAT_CONFIG = {
        duration: {},
        list: {},
        relativeTime: {},
        number: {
            integer: { maximumFractionDigits: 0 },
            currency: { style: 'currency' },
            percent: { style: 'percent' }
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit'
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric'
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            }
        }
    });
