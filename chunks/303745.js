var i,
    r,
    n =
        (this && this.__importDefault) ||
        function (t) {
            return t && t.__esModule ? t : { default: t };
        };
Object.defineProperty(e, '__esModule', { value: !0 }), (e.ICalCalendarMethod = void 0);
let s = a(26507),
    o = n(a(701606)),
    d = a(997412),
    l = a(997412);
((i = r = e.ICalCalendarMethod || (e.ICalCalendarMethod = {})).PUBLISH = 'PUBLISH'),
    (i.REQUEST = 'REQUEST'),
    (i.REPLY = 'REPLY'),
    (i.ADD = 'ADD'),
    (i.CANCEL = 'CANCEL'),
    (i.REFRESH = 'REFRESH'),
    (i.COUNTER = 'COUNTER'),
    (i.DECLINECOUNTER = 'DECLINECOUNTER'),
    (e.default = class {
        constructor(t = {}) {
            (this.data = {
                prodId: '//sebbo.net//ical-generator//EN',
                method: null,
                name: null,
                description: null,
                timezone: null,
                source: null,
                url: null,
                scale: null,
                ttl: null,
                events: [],
                x: []
            }),
                void 0 !== t.prodId && this.prodId(t.prodId),
                void 0 !== t.method && this.method(t.method),
                void 0 !== t.name && this.name(t.name),
                void 0 !== t.description && this.description(t.description),
                void 0 !== t.timezone && this.timezone(t.timezone),
                void 0 !== t.source && this.source(t.source),
                void 0 !== t.url && this.url(t.url),
                void 0 !== t.scale && this.scale(t.scale),
                void 0 !== t.ttl && this.ttl(t.ttl),
                void 0 !== t.events && this.events(t.events),
                void 0 !== t.x && this.x(t.x);
        }
        prodId(t) {
            if (!t) return this.data.prodId;
            if ('string' == typeof t && /^\/\/(.+)\/\/(.+)\/\/([A-Z]{1,4})$/.test(t)) return (this.data.prodId = t), this;
            if ('string' == typeof t) throw Error("`prodId` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalcalendar.html#prodid");
            if ('object' != typeof t) throw Error('`prodid` needs to be a valid formed string or an object!');
            if (!t.company) throw Error('`prodid.company` is a mandatory item!');
            if (!t.product) throw Error('`prodid.product` is a mandatory item!');
            let e = (t.language || 'EN').toUpperCase();
            return (this.data.prodId = '//' + t.company + '//' + t.product + '//' + e), this;
        }
        method(t) {
            return void 0 === t ? this.data.method : (t ? (this.data.method = (0, s.checkEnum)(r, t)) : (this.data.method = null), this);
        }
        name(t) {
            return void 0 === t ? this.data.name : ((this.data.name = t ? String(t) : null), this);
        }
        description(t) {
            return void 0 === t ? this.data.description : ((this.data.description = t ? String(t) : null), this);
        }
        timezone(t) {
            var e;
            return void 0 === t ? (null == (e = this.data.timezone) ? void 0 : e.name) || null : ('string' == typeof t ? (this.data.timezone = { name: t }) : null === t ? (this.data.timezone = null) : (this.data.timezone = t), this);
        }
        source(t) {
            return void 0 === t ? this.data.source : ((this.data.source = t || null), this);
        }
        url(t) {
            return void 0 === t ? this.data.url : ((this.data.url = t || null), this);
        }
        scale(t) {
            return void 0 === t ? this.data.scale : (null === t ? (this.data.scale = null) : (this.data.scale = t.toUpperCase()), this);
        }
        ttl(t) {
            return void 0 === t ? this.data.ttl : ((0, s.isMomentDuration)(t) ? (this.data.ttl = t.asSeconds()) : t && t > 0 ? (this.data.ttl = t) : (this.data.ttl = null), this);
        }
        createEvent(t) {
            let e = t instanceof o.default ? t : new o.default(t, this);
            return this.data.events.push(e), e;
        }
        events(t) {
            return t ? (t.forEach((t) => this.createEvent(t)), this) : this.data.events;
        }
        clear() {
            return (this.data.events = []), this;
        }
        save(t, e) {
            return e ? ((0, d.writeFile)(t, this.toString(), e), this) : l.promises.writeFile(t, this.toString());
        }
        saveSync(t) {
            return (0, d.writeFileSync)(t, this.toString()), this;
        }
        serve(t, e = 'calendar.ics') {
            return (
                t.writeHead(200, {
                    'Content-Type': 'text/calendar; charset=utf-8',
                    'Content-Disposition': `attachment; filename="${e}"`
                }),
                t.end(this.toString()),
                this
            );
        }
        toBlob() {
            return new Blob([this.toString()], { type: 'text/calendar' });
        }
        toURL() {
            return URL.createObjectURL(this.toBlob());
        }
        x(t, e) {
            if (void 0 === t) return (0, s.addOrGetCustomAttributes)(this.data);
            if ('string' == typeof t && 'string' == typeof e) (0, s.addOrGetCustomAttributes)(this.data, t, e);
            else if ('object' == typeof t) (0, s.addOrGetCustomAttributes)(this.data, t);
            else throw Error('Either key or value is not a string!');
            return this;
        }
        toJSON() {
            return Object.assign({}, this.data, {
                timezone: this.timezone(),
                events: this.data.events.map((t) => t.toJSON()),
                x: this.x()
            });
        }
        length() {
            return this.data.events.length;
        }
        toString() {
            var t, e;
            let a = '';
            return (
                (a = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-' + this.data.prodId + '\r\n'),
                this.data.url && (a += 'URL:' + this.data.url + '\r\n'),
                this.data.source && (a += 'SOURCE;VALUE=URI:' + this.data.source + '\r\n'),
                this.data.scale && (a += 'CALSCALE:' + this.data.scale + '\r\n'),
                this.data.method && (a += 'METHOD:' + this.data.method + '\r\n'),
                this.data.name && ((a += 'NAME:' + this.data.name + '\r\n'), (a += 'X-WR-CALNAME:' + this.data.name + '\r\n')),
                this.data.description && (a += 'X-WR-CALDESC:' + this.data.description + '\r\n'),
                (null == (t = this.data.timezone) ? void 0 : t.generator) &&
                    [...new Set([this.timezone(), ...this.data.events.map((t) => t.timezone())])]
                        .filter((t) => null !== t && !t.startsWith('/'))
                        .forEach((t) => {
                            var e;
                            if (!(null == (e = this.data.timezone) ? void 0 : e.generator)) return;
                            let i = this.data.timezone.generator(t);
                            i && (a += i.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n').trim() + '\r\n');
                        }),
                (null == (e = this.data.timezone) ? void 0 : e.name) && ((a += 'TIMEZONE-ID:' + this.data.timezone.name + '\r\n'), (a += 'X-WR-TIMEZONE:' + this.data.timezone.name + '\r\n')),
                this.data.ttl && ((a += 'REFRESH-INTERVAL;VALUE=DURATION:' + (0, s.toDurationString)(this.data.ttl) + '\r\n'), (a += 'X-PUBLISHED-TTL:' + (0, s.toDurationString)(this.data.ttl) + '\r\n')),
                this.data.events.forEach((t) => (a += t.toString())),
                (a += (0, s.generateCustomAttributes)(this.data)),
                (a += 'END:VCALENDAR'),
                (0, s.foldLines)(a)
            );
        }
    });
