var i = a(413135).Buffer;
function r(t, e, a, i) {
    if (((null == t ? void 0 : t.startsWith('/')) && (t = t.substr(1)), 'string' == typeof e || e instanceof Date)) {
        let r = new Date(e),
            n = r.getUTCFullYear() + String(r.getUTCMonth() + 1).padStart(2, '0') + r.getUTCDate().toString().padStart(2, '0');
        return (t && (n = r.getFullYear() + String(r.getMonth() + 1).padStart(2, '0') + r.getDate().toString().padStart(2, '0')), a) ? n : t ? (n += 'T' + r.getHours().toString().padStart(2, '0') + r.getMinutes().toString().padStart(2, '0') + r.getSeconds().toString().padStart(2, '0')) : (n += 'T' + r.getUTCHours().toString().padStart(2, '0') + r.getUTCMinutes().toString().padStart(2, '0') + r.getUTCSeconds().toString().padStart(2, '0') + (i ? '' : 'Z'));
    }
    if (s(e)) {
        let r = t ? (o(e) && !e.tz() ? e.clone().tz(t) : e) : i ? e : e.utc();
        return r.format('YYYYMMDD') + (a ? '' : 'T' + r.format('HHmmss') + (i || t ? '' : 'Z'));
    }
    if (l(e)) {
        let r = t ? e.setZone(t) : i ? e : e.setZone('utc');
        return r.toFormat('yyyyLLdd') + (a ? '' : 'T' + r.toFormat('HHmmss') + (i || t ? '' : 'Z'));
    }
    {
        let r = e;
        if (t) r = 'function' == typeof e.tz ? e.tz(t) : e;
        else if (i);
        else if ('function' == typeof e.utc) r = e.utc();
        else throw Error('Unable to convert dayjs object to UTC value: UTC plugin is not available!');
        return r.format('YYYYMMDD') + (a ? '' : 'T' + r.format('HHmmss') + (i || t ? '' : 'Z'));
    }
}
function n(t) {
    return String(t)
        .replace(/[\\;,"]/g, function (t) {
            return '\\' + t;
        })
        .replace(/(?:\r\n|\r|\n)/g, '\\n');
}
function s(t) {
    return null != t && null != t._isAMomentObject;
}
function o(t) {
    return s(t) && 'function' == typeof t.tz;
}
function d(t) {
    return 'object' == typeof t && null !== t && !(t instanceof Date) && !s(t) && !l(t);
}
function l(t) {
    return 'object' == typeof t && null !== t && 'function' == typeof t.toJSDate;
}
Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.toDurationString = e.toJSON = e.isRRule = e.isMomentDuration = e.isLuxonDate = e.isDayjs = e.isMomentTZ = e.isMoment = e.toDate = e.checkDate = e.checkEnum = e.checkNameAndMail = e.generateCustomAttributes = e.addOrGetCustomAttributes = e.foldLines = e.escape = e.formatDateTZ = e.formatDate = void 0),
    (e.formatDate = r),
    (e.formatDateTZ = function (t, e, a, i) {
        let n = '',
            s = (null == i ? void 0 : i.floating) || !1;
        return (null == i ? void 0 : i.timezone) && ((n = ';TZID=' + i.timezone), (s = !0)), e + n + ':' + r(t, a, !1, s);
    }),
    (e.escape = n),
    (e.foldLines = function (t) {
        return t
            .split('\r\n')
            .map(function (t) {
                let e = '',
                    a = 0;
                for (let r = 0; r < t.length; r++) {
                    let n = t.charAt(r);
                    n >= '\uD800' && n <= '\uDBFF' && (n += t.charAt(++r));
                    let s = i.from(n).length;
                    (a += s) > 74 && ((e += '\r\n '), (a = s)), (e += n);
                }
                return e;
            })
            .join('\r\n');
    }),
    (e.addOrGetCustomAttributes = function (t, e, a) {
        if (Array.isArray(e))
            t.x = e.map((t) => {
                if (Array.isArray(t)) return t;
                if ('string' != typeof t.key || 'string' != typeof t.value) throw Error('Either key or value is not a string!');
                if ('X-' !== t.key.substr(0, 2)) throw Error('Key has to start with `X-`!');
                return [t.key, t.value];
            });
        else if ('object' == typeof e)
            t.x = Object.entries(e).map(([t, e]) => {
                if ('string' != typeof t || 'string' != typeof e) throw Error('Either key or value is not a string!');
                if ('X-' !== t.substr(0, 2)) throw Error('Key has to start with `X-`!');
                return [t, e];
            });
        else {
            if ('string' != typeof e || 'string' != typeof a)
                return t.x.map((t) => ({
                    key: t[0],
                    value: t[1]
                }));
            if ('X-' !== e.substr(0, 2)) throw Error('Key has to start with `X-`!');
            t.x.push([e, a]);
        }
    }),
    (e.generateCustomAttributes = function (t) {
        let e = t.x.map(([t, e]) => t.toUpperCase() + ':' + n(e)).join('\r\n');
        return e.length ? e + '\r\n' : '';
    }),
    (e.checkNameAndMail = function (t, e) {
        let a = null;
        if ('string' == typeof e) {
            let t = e.match(/^(.+) ?<([^>]+)>$/);
            t
                ? (a = {
                      name: t[1].trim(),
                      email: t[2].trim()
                  })
                : e.includes('@') &&
                  (a = {
                      name: e.trim(),
                      email: e.trim()
                  });
        } else
            'object' == typeof e &&
                (a = {
                    name: e.name,
                    email: e.email,
                    mailto: e.mailto
                });
        if (a || 'string' != typeof e) {
            if (!a) throw Error('`' + t + '` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/icalorganizer.html');
        } else throw Error('`' + t + "` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/icalorganizer.html");
        if (!a.name) throw Error('`' + t + '.name` is empty!');
        return a;
    }),
    (e.checkEnum = function (t, e) {
        let a = Object.values(t),
            i = String(e).toUpperCase();
        if (!i || !a.includes(i)) throw Error(`Input must be one of the following: ${a.join(', ')}`);
        return i;
    }),
    (e.checkDate = function (t, e) {
        if ((t instanceof Date && isNaN(t.getTime())) || ('string' == typeof t && isNaN(new Date(t).getTime()))) throw Error(`\`${e}\` has to be a valid date!`);
        if (t instanceof Date || 'string' == typeof t || (l(t) && !0 === t.isValid) || ((s(t) || d(t)) && t.isValid())) return t;
        throw Error(`\`${e}\` has to be a valid date!`);
    }),
    (e.toDate = function (t) {
        return 'string' == typeof t || t instanceof Date ? new Date(t) : l(t) ? t.toJSDate() : t.toDate();
    }),
    (e.isMoment = s),
    (e.isMomentTZ = o),
    (e.isDayjs = d),
    (e.isLuxonDate = l),
    (e.isMomentDuration = function (t) {
        return null !== t && 'object' == typeof t && 'function' == typeof t.asSeconds;
    }),
    (e.isRRule = function (t) {
        return null !== t && 'object' == typeof t && 'function' == typeof t.between && 'function' == typeof t.toString;
    }),
    (e.toJSON = function (t) {
        return t && 'string' != typeof t ? t.toJSON() : t;
    }),
    (e.toDurationString = function (t) {
        let e = '';
        return t < 0 && ((e = '-'), (t *= -1)), (e += 'P'), t >= 86400 && ((e += Math.floor(t / 86400) + 'D'), (t %= 86400)), (!t && e.length > 1) || ((e += 'T'), t >= 3600 && ((e += Math.floor(t / 3600) + 'H'), (t %= 3600)), t >= 60 && ((e += Math.floor(t / 60) + 'M'), (t %= 60)), t > 0 ? (e += t + 'S') : e.length <= 2 && (e += '0S')), e;
    });
