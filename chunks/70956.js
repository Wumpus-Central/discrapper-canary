a.d(e, { Z: () => n });
let r = Object.freeze({
        HALF_SECOND: 500,
        SECOND: 1000,
        MINUTE: 60000,
        HOUR: 3600000,
        DAY: 86400000,
        WEEK: 604800000,
        DAYS_30: 2592000000
    }),
    n = {
        Millis: r,
        Seconds: Object.freeze({
            SECOND: 1,
            MINUTE: 60,
            HOUR: 3600,
            DAY: 86400,
            WEEK: 604800,
            DAYS_30: 2592000
        }),
        Minutes: Object.freeze({
            MINUTE: 1,
            HOUR: 60,
            DAY: 1440,
            WEEK: 10080,
            DAYS_30: 43200
        })
    };
